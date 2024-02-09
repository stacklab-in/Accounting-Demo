const Sales = require('../models/SalesOrder');
const Product = require('../models/Product');
const Receipt = require('../models/Receipt');
const Payment = require('../models/Payment');
const Customer = require('../models/Customer');
const Joi = require('joi');

const mongoose = require('mongoose');
const { serverLogger } = require('../utils/loggerWinston');

const { newIdForInvoice, newIdForTransaction } = require('../utils/ids');

const add = async (req, res) => {
    const session = await mongoose.startSession();
    let isSuccess = false;
    let isDBTransactionInProgress = false;
    let customer;
    let invoiceNumber = newIdForInvoice();

    try {
        // Start transaction
        session.startTransaction();
        isDBTransactionInProgress = true;

        let reqBody = req.body;

        const amountToPay = parseFloat(reqBody.amountToPay);

        // If New Customer arrives
        if (typeof reqBody.customer !== 'object') {
            console.log('creating customer...', reqBody.customer)
            let newCustomer = {
                name: reqBody.customer,
                userId: req.user._id,
                mobileNumber: `+91${reqBody.mobileNumber}`,
            };

            customer = new Customer(newCustomer, { session: session });

            if (!customer) {
                throw new Error("Error while creating customer");
            };

            await customer.save({ session });

        } else {
            // If Existing Customer
            customer = await Customer.findOne({ userId: req.user._id, _id: reqBody.customer._id, isDeleted: false }).session(session);

            if (!customer) {
                throw new Error("Customer not found");
            }
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
            productData.quantity -= product.quantity;
            await productData.save({ session });
        };

        const paymentData = {
            userId: req.user._id,
            amount: amountToPay.toFixed(2),
            paymentMode: reqBody.paymentMode,
            paymentStatus: reqBody.paymentStatus,
            paymentType: 'RECEIVED',
            partyType: 'CUSTOMER',
            invoiceNumber,
        };

        if (reqBody.paymentMode !== 'CASH') {
            paymentData.bankId = reqBody.bank;
        };

        // Record payment
        let payment = new Payment(paymentData);

        await payment.save({ session });

        // Create receipt
        let receipt = new Receipt({
            userId: reqBody.customer._id,
            amount: amountToPay.toFixed(2),
            paymentId: payment._id,
            invoiceNumber,
            paymentStatus: 'PENDING',
            partyType: 'CUSTOMER'
        });
        await receipt.save({ session });


        const sales = {
            userId: req.user._id,
            customerId: customer._id,
            salesManId: reqBody.salesMan._id,
            transactionId: newIdForTransaction(),
            invoiceDate: new Date(),
            invoiceDueDate: new Date(reqBody.invoiceDueDate),
            products: reqBody.products.map(product => ({
                name: product.product.name,
                quantity: product.quantity,
                sellPrice: product.sellingPrice,
                gstValue: product.product.gstValue,
                discount: product.discount,
                netAmount: product.quantity * product.sellingPrice
            })),
            discount: reqBody.discount,
            totalDiscount: reqBody.totalDiscount,
            totalAmount: reqBody.totalAmount,
            remainingAmount: (reqBody.totalAmount - amountToPay.toFixed(2)),
            invoiceNumber,
            payments: [{
                paymentID: payment._id,
                receiptID: receipt._id,
                amount: amountToPay.toFixed(2),
                paymentDate: new Date()
            }],
        };
        // Now create a sales order 
        let salesOrder = new Sales(sales);

        await salesOrder.save({ session });

        // Commit the transaction After all work done
        await session.commitTransaction();
        isSuccess = true;

        return res.status(200).json({ msg: 'Sales order created successfully' });

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
        const salesOrders = await Sales.find({ isDeleted: false, userId: req.user._id }).populate('customerId salesManId payments.paymentID');
        return res.status(200).json({ msg: 'Sales orders fetched successfully!.', data: salesOrders });
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
        salesOrderId: Joi.string().required(),
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

        const salesOrder = await Sales.findOne({ _id: requestBody.salesOrderId, userId: req.user._id, isDeleted: false }).session(session);
        if (!salesOrder) {
            return res.status(400).json({ error: 'Sales order not found or may be deleted!.' });
        };

        const paymentStatus = salesOrder.remainingAmount - salesOrder.amountToPay === 0 ? 'PAID' : 'PENDING';

        // Now create payment
        const payment = new Payment({
            userId: req.user._id,
            amount: amountToPay.toFixed(2),
            paymentMode: requestBody.paymentMode,
            paymentStatus,
            paymentType: 'RECEIVED',
            partyType: 'CUSTOMER',
            invoiceNumber: salesOrder.invoiceNumber,
            createdAt: new Date(requestBody.paymentDate)
        }, { session: session });

        //  Now Create receipt for it 
        const receipt = new Receipt({
            userId: salesOrder.customerId,
            amount: amountToPay.toFixed(2),
            paymentId: payment._id,
            invoiceNumber: salesOrder.invoiceNumber,
            paymentStatus,
            partyType: 'CUSTOMER'
        }, { session: session });

        // Now Update Sales order with payments and remaining balance
        salesOrder.remainingAmount -= amountToPay.toFixed(2);
        salesOrder.payments.push({
            paymentID: payment._id,
            receiptID: receipt._id,
            amount: parseInt(payment.amount),
            paymentDate: new Date(requestBody.paymentDate)
        });

        // Now Save all the payments and sales order
        await payment.save({ session: session });
        await receipt.save({ session: session });
        await salesOrder.save({ session: session });

        // Commit the transaction After all work done
        await session.commitTransaction();
        isSuccess = true;

        return res.status(200).json({ msg: 'Sales order payment recorded successfully' });

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

const getSummaryOfSales = async (req, res) => {
    try {
        const salesOrders = await Sales.find({});

        // Calculate total sales amount
        const totalSalesAmount = salesOrders.reduce((acc, order) => acc + order.totalAmount, 0).toFixed(2);

        // Calculate total paid amount
        const totalPaidAmount = salesOrders.reduce((acc, order) => {
            const paidAmount = order.payments.reduce((total, payment) => total + payment.amount, 0);
            return acc + paidAmount;
        }, 0).toFixed(2);

        // Calculate pending amount
        const pendingAmount = (totalSalesAmount - totalPaidAmount).toFixed(2);

         const summary = {
            totalSalesAmount: Number(totalSalesAmount),
            totalPaidAmount: Number(totalPaidAmount),
            pendingAmount: Number(pendingAmount)
        };


        res.status(200).json({ msg: 'Summary fetched successfully', data: summary });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { add, list, recordPayment, getSummaryOfSales };