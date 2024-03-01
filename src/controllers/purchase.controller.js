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
const ProductBarcodeValues = require('../models/ProductBarcodeValues');
const ProductBarcode = require('../models/ProductBarcodes');

const add = async (req, res) => {
    const session = await mongoose.startSession();
    let isSuccess = false;
    let isDBTransactionInProgress = false;
    const { invoiceNumber: lastInvoiceNumber } = await Purchase.findOne({ orderType: 'PURCHASE', isDeleted: false }, {}, { sort: { 'createdAt': -1 } }) || { invoiceNumber: 'PINV-0' };
    const incrementedNumber = (parseInt(lastInvoiceNumber.slice(5), 10) + 1).toString();
    const invoiceNumber = 'PINV-' + incrementedNumber;
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
            productData.quantity += parseInt(product.quantity);
            await productData.save({ session });

            //  I want to create barcode for each purchase price and then save in barcodes records
            // Find for barcode values
            const barcodeValues = await ProductBarcodeValues.findOne({ userId: req.user._id, isDeleted: false }).session(session);

            if (!barcodeValues) {
                throw new Error("Barcode values not found");
            };

            //  Check first if barcode is already exist or not for same purchase price 
            const barcode = await ProductBarcode.findOne({ userId: req.user._id, purchasePrice: product.sellingPrice, isDeleted: false }).session(session);
            if (!barcode) {
                const firstPart = Math.floor(Math.random() * 900) + 100;
                const secondPart = parseInt(product.sellingPrice, 10) * parseInt(barcodeValues.value, 10);
                const thirdPart = 16;
                const fourthPart = (parseInt(product.sellingPrice, 10) * parseInt(barcodeValues.percentageValue, 10)) + secondPart;
                const fifthPart = Math.floor(Math.random() * 900) + 100;
                const generatedBarcode = `${firstPart}${secondPart.toString().padStart(6, '0')}${thirdPart}${fourthPart.toString().padStart(6, '0')}${fifthPart}`;
                let productBarcode = new ProductBarcode({
                    userId: req.user._id,
                    barcode: generatedBarcode,
                    purchasePrice: product.sellingPrice,
                    productId: productData._id,
                    createdAt: newDate,
                    updatedAt: newDate
                }, { session });
                await productBarcode.save({ session });
            }
        };

        const paymentData = {
            userId: req.user._id,
            amount: amountToPay,
            paymentMode: reqBody.paymentMode,
            paymentStatus: reqBody.paymentStatus,
            paymentType: 'PAID',
            partyType: 'VENDOR',
            userName: vendor.name,
            invoiceNumber,
            createdAt: newDate,
            updatedAt: newDate
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
            userName: vendor.name,
            paymentStatus: reqBody.paymentStatus,
            partyType: 'VENDOR',
            createdAt: newDate,
            updatedAt: newDate
        }, { session });


        // Find Bank if bankId exist and add balance 
        if (reqBody.paymentMode !== 'CASH') {
            const bank = await Bank.findOne({ _id: reqBody.bank, userId: req.user._id, isDeleted: false });
            if (!bank) {
                return res.status(404).json({ error: 'Bank not found' });
            };
            bank.balance = bank.balance - parseFloat(reqBody.amountToPay);
            await bank.save({ session });
        }

        const purchase = {
            userId: req.user._id,
            vendorId: vendor._id,
            transactionId: newIdForTransaction(),
            orderType: 'PURCHASE',
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

        if (reqBody.referenceNumber) {
            purchase.referenceNumber = reqBody.referenceNumber;
        };

        // Now create a purchase order 
        let purchaseOrder = new Purchase(purchase, { session });

        await vendor.save({ session });
        await payment.save({ session });
        await receipt.save({ session });
        await purchaseOrder.save({ session });

        // Commit the transaction After all work done
        await session.commitTransaction();
        isSuccess = true;

        return res.status(200).json({ msg: 'Purchase order created successfully' });

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
        const purchaseOrders = await Purchase.find({ isDeleted: false, userId: req.user._id, orderType: 'PURCHASE' }).sort({ createdAt: -1 }).populate('vendorId  payments.paymentID');
        return res.status(200).json({ msg: 'Purchase orders fetched successfully!.', data: purchaseOrders });
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

        const purchaseOrder = await Purchase.findOne({ _id: requestBody.id, userId: req.user._id,orderType:'PURCHASE', isDeleted: false }).session(session);
        if (!purchaseOrder) {
            return res.status(400).json({ error: 'Purchase order not found or may be deleted!.' });
        };

        let vendor = await Vendor.findOne({ userId: req.user._id, _id: purchaseOrder.vendorId, isDeleted: false }).session(session);
        if(!vendor){
            return res.status(400).json({ error: 'Vendor not found or may be deleted!.' });
        };

        const paymentStatus = purchaseOrder.remainingAmount - amountToPay === 0 ? 'PAID' : 'PENDING';

        // Now create payment
        const payment = new Payment({
            userId: req.user._id,
            amount: amountToPay.toFixed(2),
            paymentMode: requestBody.paymentMode,
            paymentStatus,
            paymentType: 'PAID',
            partyType: 'VENDOR',
            userName: vendor.name,
            invoiceNumber: purchaseOrder.invoiceNumber,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { session: session });

        if (requestBody.paymentMode !== 'CASH') {
            payment.bankId = requestBody.bank;
            // Find Bank if bankId exist and add balance
            const bank = await Bank.findOne({ _id: requestBody.bank, userId: req.user._id, isDeleted: false });
            if (!bank) {
                return res.status(404).json({ error: 'Bank not found' });
            }
            bank.balance = bank.balance - parseFloat(requestBody.amountToPay).toFixed(2);
            await bank.save({ session });
        };

        //  Now Create receipt for it 
        const receipt = new Receipt({
            userId: req.user._id,
            amount: amountToPay.toFixed(2),
            paymentId: payment._id,
            invoiceNumber: purchaseOrder.invoiceNumber,
            paymentStatus,
            partyType: 'VENDOR',
            userName: vendor.name,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { session: session });

        // Now Update Purchase order with payments and remaining balance
        purchaseOrder.remainingAmount -= amountToPay.toFixed(2);
        purchaseOrder.payments.push({
            paymentID: payment._id,
            receiptID: receipt._id,
            amount: payment.amount,
            paymentDate: new Date(requestBody.paymentDate)
        });
        purchaseOrder.paymentStatus = paymentStatus

        // Now Save all the payments and sales order
        await payment.save({ session: session });
        await receipt.save({ session: session });
        await purchaseOrder.save({ session: session });

        // Commit the transaction After all work done
        await session.commitTransaction();
        isSuccess = true;

        return res.status(200).json({ msg: 'Purchase order payment recorded successfully' });

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
        const purchaseOrder = await Purchase.find({ orderType: 'PURCHASE', isDeleted: false, userId: req.user._id });

        // Calculate total sales amount
        const totalPurchaseAmount = purchaseOrder.reduce((acc, order) => acc + order.totalAmount, 0).toFixed(2);

        // Calculate total paid amount
        const totalPaidAmount = purchaseOrder.reduce((acc, order) => {
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

        const purchaseOrder = await Purchase.findOne({ _id: bodyData.id, userId: req.user._id });

        if (!purchaseOrder) {
            return res.status(400).json({ error: 'Purchase order not found!' });
        };

        purchaseOrder.paymentStatus = bodyData.paymentStatus;
        await purchaseOrder.save();

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

        const purchaseOrder = await Purchase.findOne({ isDeleted: false, _id: req.body.id, userId: req.user._id }).session(session);

        if (!purchaseOrder) {
            return res.status(404).json({ error: 'Purchase order not found!..' });
        };

        // Delete payments and receipts
        const paymentIds = purchaseOrder.payments.map(payment => payment.paymentID);

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


        purchaseOrder.isDeleted = true;
        await purchaseOrder.save({ session });

        // Commit the transaction After all work done
        await session.commitTransaction();
        isSuccess = true;

        return res.status(200).json({ msg: 'Purchase order deleted successfully!..' });
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