const Sales = require('../models/SalesOrder');
const Product = require('../models/Product');
const Receipt = require('../models/Receipt');
const Payment = require('../models/Payment');
const Customer = require('../models/Customer');
const Joi = require('joi');

const mongoose = require('mongoose');
const { serverLogger } = require('../utils/loggerWinston');

const { newIdForInvoice, newIdForTransaction } = require('../utils/ids');
const Bank = require('../models/Bank');

const add = async (req, res) => {
    const session = await mongoose.startSession();
    let isSuccess = false;
    let isDBTransactionInProgress = false;
    let customer;
    // Generate Invoice Number Based on previous number plus one 
    const { invoiceNumber: lastInvoiceNumber } = await Sales.findOne({ isDeleted: false }, {}, { sort: { 'createdAt': -1 } }) || { invoiceNumber: 'SINV-0' };
    const incrementedNumber = (parseInt(lastInvoiceNumber.slice(5), 10) + 1).toString();
    const invoiceNumber = 'SINV-' + incrementedNumber;
    const newDate = new Date();

    try {
        // Start transaction
        session.startTransaction();
        isDBTransactionInProgress = true;

        let reqBody = req.body;

        const amountToPay = parseFloat(reqBody.amountToPay);

        // If New Customer arrives
        if (typeof reqBody.mobileNumber === 'string') {
            console.log('creating new customer...', reqBody.customer)
            let newCustomer = {
                name: reqBody.customer,
                userId: req.user._id,
                mobileNumber: `+91${reqBody.mobileNumber}`,
                createdAt: newDate,
                updatedAt: newDate
            };
            // Check customer with number exist or not if exist then give error message
            const customerWithMobileNumber = await Customer.findOne({ userId: req.user._id, mobileNumber: `+91${reqBody.mobileNumber}`, isDeleted: false }).session(session);
            if (customerWithMobileNumber) {
                throw new Error("Customer with this mobile number already exist");
            };

            customer = new Customer(newCustomer, { session: session });

            if (!customer) {
                throw new Error("Error while creating customer");
            };


        } else {
            // If Existing Customer
            customer = await Customer.findOne({ userId: req.user._id, _id: reqBody.mobileNumber._id, isDeleted: false }).session(session);

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
            amount: amountToPay,
            paymentMode: reqBody.paymentMode,
            paymentStatus: reqBody.paymentStatus,
            paymentType: 'RECEIVED',
            partyType: 'CUSTOMER',
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
            paymentStatus: reqBody.paymentStatus,
            partyType: 'CUSTOMER',
            createdAt: newDate,
            updatedAt: newDate
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

        const sales = {
            userId: req.user._id,
            customerId: customer._id,
            salesManId: reqBody.salesMan._id,
            transactionId: newIdForTransaction(),
            invoiceDate: new Date(),
            // invoiceDueDate: new Date(reqBody.invoiceDueDate),
            products: reqBody.products.map(product => ({
                name: product.product.name,
                quantity: product.quantity,
                sellingPrice: product.sellingPrice,
                gstValue: product.product.gstValue,
                discount: product.discount,
                netAmount: product.quantity * product.sellingPrice,
                productID: product.product._id
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
        // Now create a sales order 
        let salesOrder = new Sales(sales, { session });


        if (customer) await customer.save({ session });
        await payment.save({ session });
        await receipt.save({ session });
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
        const salesOrders = await Sales.find({ isDeleted: false, userId: req.user._id }).sort({ createdAt: -1 }).populate('customerId salesManId payments.paymentID');
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

        const paymentStatus = salesOrder.remainingAmount - amountToPay === 0 ? 'PAID' : 'PENDING';

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
            invoiceNumber: salesOrder.invoiceNumber,
            paymentStatus,
            partyType: 'CUSTOMER'
        }, { session: session });

        // Now Update Sales order with payments and remaining balance
        salesOrder.remainingAmount -= amountToPay.toFixed(2);
        salesOrder.payments.push({
            paymentID: payment._id,
            receiptID: receipt._id,
            amount: payment.amount,
            paymentDate: new Date(requestBody.paymentDate)
        });
        salesOrder.paymentStatus = paymentStatus

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
        const salesOrders = await Sales.find({ isDeleted: false, userId: req.user._id });

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
            totalSalesAmount: Number(totalSalesAmount ?? 0),
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
    const session = await mongoose.startSession();
    let isSuccess = false;
    let isDBTransactionInProgress = false;
    let newDate = new Date();

    try {
        // Start transaction
        session.startTransaction();
        isDBTransactionInProgress = true;

        const bodyData = req.body;
        console.log("🚀 ~ update ~ bodyData:", bodyData)
        let payment;
        let receipt;
        let bank;
        const amountToPay = parseFloat(bodyData.amountToPay)
        const salesOrder = await Sales.findOne({ _id: bodyData.id, userId: req.user._id, isDeleted: false }).session(session);

        if (!salesOrder) {
            return res.status(400).json({ error: 'Sales order not found!' });
        };


        //  Check products first and manage quantity of them 
        for (let product of salesOrder.products) {
            const updatedProduct = bodyData.products.find(p => p.product.name === product.name);
            if (!updatedProduct) {
                console.log(product)
                // Product exists in existing sales order but not in the updated one, add back the quantity
                const productData = await Product.findOne({ userId: req.user._id, _id: product.productID, isDeleted: false }).session(session);
                if (productData) {
                    console.log(`product Quantity Before ${productData.name}`, productData.quantity)
                    productData.quantity += product.quantity;
                    console.log(`product Quantity After ${productData.name}`, productData.quantity)
                    // await productData.save({session});
                } else {
                    return res.status(400).json({ error: 'Product not found!' });
                }
            } else {
                console.log('existing product', product)
                // Product exists in both orders, compare quantities
                const diff = updatedProduct.quantity - product.quantity;
                console.log("🚀 ~ update ~ diff:", diff)
                if (diff !== 0) {
                    const productData = await Product.findOne({ userId: req.user._id, _id: product.productID, isDeleted: false }).session(session);
                    if (productData) {
                        console.log('product Data', productData)
                        console.log('Difference in quantity', diff)
                        if (diff > 0) {
                            console.log('Difference is greater decresing from inventory', diff)
                            // If updated quantity is higher, decrease from inventory
                            productData.quantity -= diff;
                        } else {
                            console.log('Difference is less increasing in inventory', diff)
                            // If updated quantity is lower, increase inventory
                            productData.quantity += Math.abs(diff);
                        }
                        // await productData.save({session});
                    }
                }
            }
        };

        // Decrease quantity for new products
        for (let product of bodyData.products) {
            const existingProduct = salesOrder.products.find(p => p.productID.toString() === product.product._id.toString());
            if (!existingProduct) {
                // New product in the updated sales order, decrease the quantity in inventory
                const productData = await Product.findOne({ userId: req.user._id, _id: product.product._id, isDeleted: false }).session(session);
                if (productData) {
                    console.log(`New product Quantity Before ${productData.name}`, productData.quantity);
                    productData.quantity -= parseInt(product.quantity);
                    console.log(`New product Quantity After ${productData.name}`, productData.quantity);
                    // await productData.save({session});
                } else {
                    return res.status(400).json({ error: 'Product not found!' });
                }
            }
        };

        //  Now update the sales order
        salesOrder.products = bodyData.products.map(product => ({
            name: product.product.name,
            quantity: product.quantity,
            sellingPrice: product.sellingPrice,
            gstValue: product.product.gstValue,
            discount: product.discount,
            netAmount: product.quantity * product.sellingPrice,
            productID: product.product._id
        }));

        //  Now update the payments and receipts
        //  If the previous totalAmount is changed to new totalAmount then we need to update the payment and receipt and 
        // if (amountToPay > 0) {
        //     // Make payment and receipt for this
        //     const paymentData = {
        //         userId: req.user._id,
        //         amount: amountToPay,
        //         paymentMode: bodyData.paymentMode,
        //         paymentStatus: bodyData.paymentStatus,
        //         paymentType: 'RECEIVED',
        //         partyType: 'CUSTOMER',
        //         invoiceNumber: salesOrder.invoiceNumber,
        //         createdAt: newDate,
        //         updatedAt: newDate
        //     };

        //     if (bodyData.paymentMode !== 'CASH') {
        //         paymentData.bankId = bodyData.bank;
        //     };
        //     // Record payment
        //     payment = new Payment(paymentData, { session });

        //     // Create receipt
        //     receipt = new Receipt({
        //         userId: req.user._id,
        //         amount: amountToPay,
        //         paymentId: payment._id,
        //         invoiceNumber: salesOrder.invoiceNumber,
        //         paymentStatus: bodyData.paymentStatus,
        //         partyType: 'CUSTOMER',
        //         createdAt: newDate,
        //         updatedAt: newDate
        //     }, { session });

        //     // Find Bank if bankId exist and add balance 
        //     if (bodyData.paymentMode !== 'CASH') {
        //         bank = await Bank.findOne({ _id: bodyData.bank, userId: req.user._id, isDeleted: false }).session(session);
        //         if (!bank) {
        //             return res.status(404).json({ error: 'Bank not found' });
        //         };
        //         bank.balance = bank.balance + parseFloat(bodyData.amountToPay);
        //     };

        //     salesOrder.payments.push({
        //         paymentID: payment._id,
        //         receiptID: receipt._id,
        //         amount: amountToPay,
        //         paymentDate: new Date()
        //     })
        // };

        const previouslyPaidAmount = salesOrder.totalAmount - salesOrder.remainingAmount;

        salesOrder.discount = bodyData.discount;
        salesOrder.totalDiscount = bodyData.totalDiscount;
        salesOrder.totalAmount = bodyData.totalAmount;
        salesOrder.remainingAmount = (bodyData.totalAmount - (amountToPay || 0) - previouslyPaidAmount);
        salesOrder.paymentStatus = salesOrder.remainingAmount === 0 ? 'PAID' : 'PENDING';
        console.log(salesOrder);
        // Save all models
        // await payment.save({session});
        // await receipt.save({session});
        // await bank.save({session});
        await salesOrder.save({ session });

        // Commit the transaction After all work done
        await session.commitTransaction();
        isSuccess = true;

        return res.status(200).json({ msg: 'Sales orders updated successfully!.' });
    } catch (error) {
        console.log({ error });
        serverLogger("error", { error: error.stack || error.toString() });
        res.status(400).json({ error: error.toString() });
    } finally {
        isSuccess ? undefined : (isDBTransactionInProgress ? await session.abortTransaction() : undefined);
        // End the session
        session.endSession();
    };
}

const remove = async (req, res) => {
    const session = await mongoose.startSession();
    let isSuccess = false;
    let isDBTransactionInProgress = false;
    try {
        // Start transaction
        session.startTransaction();
        isDBTransactionInProgress = true;

        const salesOrder = await Purchase.findOne({ isDeleted: false, _id: req.body.id, userId: req.user._id }).session(session);

        if (!salesOrder) {
            return res.status(404).json({ error: 'Purchase order not found!..' });
        };

        // Delete payments and receipts
        const paymentIds = salesOrder.payments.map(payment => payment.paymentID);

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


        salesOrder.isDeleted = true;
        await salesOrder.save({ session });

        // Commit the transaction After all work done
        await session.commitTransaction();
        isSuccess = true;

        return res.status(200).json({ msg: 'Sales order deleted successfully!..' });
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

module.exports = { add, list, recordPayment, getSummaryOfSales, update, remove };