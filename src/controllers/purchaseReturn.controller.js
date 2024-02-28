const mongoose = require('mongoose');
const { serverLogger } = require('../utils/loggerWinston');
const { newIdForInvoice, newIdForTransaction } = require('../utils/ids');
const Purchase = require('../models/PurchaseOrder');
const Product = require('../models/Product');
const Receipt = require('../models/Receipt');
const Payment = require('../models/Payment');
const Joi = require('joi');
const Bank = require('../models/Bank');
const Vendor = require('../models/Vendor');

const add = async (req, res) => {
    const session = await mongoose.startSession();
    let isSuccess = false;
    let isDBTransactionInProgress = false;
    const { invoiceNumber: lastInvoiceNumber } = await Purchase.findOne({ orderType: 'RETURN', isDeleted: false }, {}, { sort: { 'createdAt': -1 } }) || { invoiceNumber: 'PRINV-0' };
    const incrementedNumber = (parseInt(lastInvoiceNumber.slice(6), 10) + 1).toString();
    const invoiceNumber = 'PRINV-' + incrementedNumber;
    const newDate = new Date();

    try {
        // Start transaction
        session.startTransaction();
        isDBTransactionInProgress = true;

        let reqBody = req.body;

        const amountToPay = parseFloat(reqBody.amountToPay);

        // If Existing Customer
        let vendor = await Vendor.findOne({ userId: req.user._id, _id: reqBody.vendor._id, isDeleted: false }).session(session);

        if (!vendor) {
            throw new Error("Vendor not found");
        }

        // First take all products decrease the quantity of them 
        for (let product of reqBody.products) {
            let productData = await Product.findOne({ userId: req.user._id, _id: product.product._id }).session(session);
            if (!productData) {
                throw new Error("Product not found");
            };
            if (productData.quantity < product.quantity) {
                throw new Error("Product quantity is less than requested");
            };
            productData.quantity -= parseInt(product.quantity);
            await productData.save({ session });
        };

        const paymentData = {
            userId: req.user._id,
            amount: amountToPay,
            paymentMode: reqBody.paymentMode,
            paymentStatus: reqBody.paymentStatus,
            paymentType: 'RECEIVED',
            partyType: 'VENDOR',
            invoiceNumber,
            createdAt: newDate,
            updatedAt: newDate,
            userName: vendor.name,
        };

        if (reqBody.paymentMode !== 'CASH') {
            paymentData.bankId = reqBody.bank;
        };

        // Record payment
        let payment = new Payment(paymentData, { session });


        // Create receipt
        let receipt = new Receipt({
            userId: req.user._id,
            amount: amountToPay,
            paymentId: payment._id,
            invoiceNumber,
            paymentStatus: reqBody.paymentStatus,
            partyType: 'VENDOR',
            createdAt: newDate,
            updatedAt: newDate,
            userName: vendor.name,
        }, { session });


        // Find Bank if bankId exist and add balance 
        if (reqBody.paymentMode !== 'CASH') {
            const bank = await Bank.findOne({ _id: reqBody.bank, userId: req.user._id, isDeleted: false });
            if (!bank) {
                return res.status(404).json({ error: 'Bank not found' });
            };
            bank.balance = bank.balance + parseFloat(reqBody.amountToPay);
            await bank.save({ session });
        }

        const purchase = {
            userId: req.user._id,
            vendorId: vendor._id,
            transactionId: newIdForTransaction(),
            orderType: 'RETURN',
            purchaseDate: new Date(),
            products: reqBody.products.map(product => ({
                name: product.product.name,
                quantity: product.quantity,
                sellingPrice: product.sellingPrice,
                gstValue: product.product.gstValue,
                discount: product.discount,
                netAmount: product.quantity * product.sellingPrice
            })),
            discount: reqBody.discount,
            totalDiscount: reqBody.totalDiscount,
            totalAmount: reqBody.totalAmount,
            remainingAmount: (reqBody.totalAmount - amountToPay),
            invoiceNumber,
            payments: [{
                paymentID: payment._id,
                receiptID: receipt._id,
                amount: amountToPay,
                paymentDate: new Date()
            }],
            paymentStatus: reqBody.paymentStatus,
            createdAt: newDate,
            updatedAt: newDate
        };
        // Now create a purchase order 
        let purchaseReturnOrder = new Purchase(purchase, { session });


        await vendor.save({ session });
        await payment.save({ session });
        await receipt.save({ session });
        await purchaseReturnOrder.save({ session });


        // Commit the transaction After all work done
        await session.commitTransaction();
        isSuccess = true;

        return res.status(200).json({ msg: 'Purchase return order created successfully' });

    } catch (error) {
        console.log({ error });
        serverLogger("error", { error: error.stack || error.toString() });
        res.status(400).json({ error: error.toString() });
    } finally {
        isSuccess ? undefined : (isDBTransactionInProgress ? await session.abortTransaction() : undefined);
        // End the session
        session.endSession();
    };
};

const list = async (req, res) => {
    try {
        const purchaseReturnOrders = await Purchase.find({ isDeleted: false, userId: req.user._id, orderType: 'RETURN' }).sort({ createdAt: -1 }).populate('vendorId  payments.paymentID');
        return res.status(200).json({ msg: 'Purchase return orders fetched successfully!.', data: purchaseReturnOrders });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const recordPayment = async (req, res) => {
    const session = await mongoose.startSession();
    let isSuccess = false;
    let isDBTransactionInProgress = false;

    const schema = Joi.object({
        id: Joi.string().required(),
        amountToPay: Joi.number().positive().required(),
        paymentDate: Joi.date().required(),
        paymentMode: Joi.string().valid('CASH',
            'CARD',
            'UPI',
            'NET BANKING',
            'CHEQUE',
            'EMI').required(),
        bank: Joi.when('paymentMode', {
            is: Joi.string().valid('CARD', 'UPI', 'NET BANKING', 'CHEQUE', 'EMI'),
            then: Joi.string().required(),
            otherwise: Joi.any().optional()
        })
    });

    try {
        // Start transaction
        session.startTransaction();
        isDBTransactionInProgress = true;

        const requestBody = req.body;

        const { error } = schema.validate(requestBody);

        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        };

        const amountToPay = parseFloat(requestBody.amountToPay);

        const purchaseReturnOrder = await Purchase.findOne({ _id: requestBody.id, userId: req.user._id, orderType: 'RETURN', isDeleted: false }).session(session);
        if (!purchaseReturnOrder) {
            return res.status(400).json({ error: 'Purchase return order not found or may be deleted!.' });
        };

        let vendor = await Vendor.findOne({ userId: req.user._id, _id: purchaseReturnOrder.vendorId, isDeleted: false }).session(session);
        if (!vendor) {
            return res.status(400).json({ error: 'Vendor not found or may be deleted!.' });
        };

        const paymentStatus = purchaseReturnOrder.remainingAmount - amountToPay === 0 ? 'PAID' : 'PENDING';

        // Now create payment
        const payment = new Payment({
            userId: req.user._id,
            amount: amountToPay.toFixed(2),
            paymentMode: requestBody.paymentMode,
            paymentStatus,
            paymentType: 'RECEIVED',
            partyType: 'VENDOR',
            invoiceNumber: purchaseReturnOrder.invoiceNumber,
            createdAt: new Date(),
            updatedAt: new Date(),
            userName: vendor.name,
        }, { session: session });

        if (requestBody.paymentMode !== 'CASH') {
            payment.bankId = requestBody.bank;
            // Find Bank if bankId exist and add balance
            const bank = await Bank.findOne({ _id: requestBody.bank, userId: req.user._id, isDeleted: false });
            if (!bank) {
                return res.status(404).json({ error: 'Bank not found' });
            }
            bank.balance = bank.balance + parseFloat(requestBody.amountToPay).toFixed(2);
            await bank.save({ session });
        };

        //  Now Create receipt for it 
        const receipt = new Receipt({
            userId: req.user._id,
            amount: amountToPay.toFixed(2),
            paymentId: payment._id,
            invoiceNumber: purchaseReturnOrder.invoiceNumber,
            paymentStatus,
            partyType: 'VENDOR',
            createdAt: new Date(),
            updatedAt: new Date(),
            userName: vendor.name,
        }, { session: session });

        // Now Update Purchase order with payments and remaining balance
        purchaseReturnOrder.remainingAmount -= amountToPay.toFixed(2);
        purchaseReturnOrder.payments.push({
            paymentID: payment._id,
            receiptID: receipt._id,
            amount: payment.amount,
            paymentDate: new Date(requestBody.paymentDate)
        });
        purchaseReturnOrder.paymentStatus = paymentStatus

        // Now Save all the payments and sales order
        await payment.save({ session: session });
        await receipt.save({ session: session });
        await purchaseReturnOrder.save({ session: session });


        // Commit the transaction After all work done
        await session.commitTransaction();
        isSuccess = true;

        return res.status(200).json({ msg: 'Purchase return order payment recorded successfully' });

    } catch (error) {
        console.log({ error });
        serverLogger("error", { error: error.stack || error.toString() });
        res.status(400).json({ error: error.toString() });
    } finally {
        isSuccess ? undefined : (isDBTransactionInProgress ? await session.abortTransaction() : undefined);
        // End the session
        session.endSession();
    };
};

const getSummaryOfPurchase = async (req, res) => {
    try {
        const purchaseReturnOrder = await Purchase.find({ orderType: 'RETURN', isDeleted: false, userId: req.user._id });

        // Calculate total sales amount
        const totalPurchaseAmount = purchaseReturnOrder.reduce((acc, order) => acc + order.totalAmount, 0).toFixed(2);

        // Calculate total paid amount
        const totalPaidAmount = purchaseReturnOrder.reduce((acc, order) => {
            const paidAmount = order.payments.reduce((total, payment) => total + payment.amount, 0);
            return acc + paidAmount;
        }, 0).toFixed(2);

        // Calculate pending amount
        const pendingAmount = (totalPurchaseAmount - totalPaidAmount).toFixed(2);

        const summary = {
            totalPurchaseAmount: Number(totalPurchaseAmount ?? 0),
            totalPaidAmount: Number(totalPaidAmount ?? 0),
            pendingAmount: Number(pendingAmount ?? 0)
        };

        res.status(200).json({ msg: 'Summary fetched successfully', data: summary });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const update = async (req, res) => {
    try {
        const bodyData = req.body;

        const purchaseReturnOrder = await Purchase.findOne({ _id: bodyData.id, orderType: 'RETURN', userId: req.user._id });

        if (!purchaseReturnOrder) {
            return res.status(400).json({ error: 'Purchase return order not found!' });
        };

        purchaseReturnOrder.paymentStatus = bodyData.paymentStatus;
        await purchaseReturnOrder.save();

        return res.status(200).json({ msg: 'Purchase orders updated successfully!.' });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

const remove = async (req, res) => {
    const session = await mongoose.startSession();
    let isSuccess = false;
    let isDBTransactionInProgress = false;
    try {
        // Start transaction
        session.startTransaction();
        isDBTransactionInProgress = true;

        const purchaseReturnOrder = await Purchase.findOne({ isDeleted: false, orderType: 'RETURN', _id: req.body.id, userId: req.user._id }).session(session);

        if (!purchaseReturnOrder) {
            return res.status(404).json({ error: 'Purchase return order not found!..' });
        };

        // Delete payments and receipts
        const paymentIds = purchaseReturnOrder.payments.map(payment => payment.paymentID);

        // Update Payments
        await Payment.updateMany(
            { _id: { $in: paymentIds } }, // Filter criteria
            { $set: { isDeleted: true } } // Update operation
        ).session(session);

        // Update Receipts
        await Receipt.updateMany(
            { paymentId: { $in: paymentIds } }, // Filter criteria
            { $set: { isDeleted: true } } // Update operation
        ).session(session);


        purchaseReturnOrder.isDeleted = true;
        await purchaseReturnOrder.save({ session });

        // Commit the transaction After all work done
        await session.commitTransaction();
        isSuccess = true;

        return res.status(200).json({ msg: 'Purchase return order deleted successfully!..' });
    } catch (error) {
        console.log({ error });
        serverLogger("error", { error: error.stack || error.toString() });
        res.status(400).json({ error: error.toString() });
    } finally {
        isSuccess ? undefined : (isDBTransactionInProgress ? await session.abortTransaction() : undefined);
        // End the session
        session.endSession();
    };
};

module.exports = { add, list, recordPayment, getSummaryOfPurchase, update, remove };