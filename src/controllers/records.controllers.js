const Payment = require('../models/Payment')
const Receipt = require('../models/Receipt');
const Purchase = require('../models/PurchaseOrder');
const Expenditure = require('../models/Expenditure');
const Bank = require('../models/Bank');
const mongoose = require('mongoose');

const getAllReceipts = async (req, res) => {
    try {
        const receipts = await Receipt.aggregate([
            {
                $match: {
                    userId: req.user._id, // Replace 'userId' with the actual user ID you want to filter by
                    isDeleted: false
                }
            },
            {
                $lookup: {
                    from: 'salesorders', // Assuming your SalesOrder model is named 'SalesOrder'
                    localField: 'invoiceNumber',
                    foreignField: 'invoiceNumber',
                    as: 'salesOrder'
                }
            },
            {
                $unwind: '$salesOrder'
            },
            {
                $lookup: {
                    from: 'customers',
                    localField: 'salesOrder.customerId',
                    foreignField: '_id',
                    as: 'customer'
                }
            },
            {
                $lookup: {
                    from: 'payments',
                    localField: 'paymentId',
                    foreignField: '_id',
                    as: 'payment'
                }
            },
            {
                $addFields: {
                    customerName: { $arrayElemAt: ['$customer.name', 0] }, // Get the first element of the customer array
                    paymentId: { $arrayElemAt: ['$payment', 0] } // Get the first element of the customer array
                }
            },
            {
                $project: {
                    _id: 1,
                    userId: 1,
                    amount: 1,
                    bankId: 1,
                    invoiceNumber: 1,
                    paymentId: 1,
                    paymentType: 1,
                    partyType: 1,
                    paymentStatus: 1,
                    isDeleted: 1,
                    customerName: 1,
                    createdAt: 1
                }
            },
            {
                $sort: { createdAt: -1 } // Sort by createdAt in descending order
            }
        ]);

        return res.status(200).json({ msg: 'Receipts fetched successfully!.', data: receipts });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const addPayment = async (req, res) => {
    const session = await mongoose.startSession();
    let isSuccess = false;
    let isDBTransactionInProgress = false;
    try {

        // Check for all fields to come 
        const { partyType, invoices, totalAmount, paymentDate, discount, paymentMode, bankId, chequeNumber } = req.body;

        if (!partyType || invoices.length === 0 || !totalAmount || (discount < 0 ) || !paymentDate || !paymentMode) {
            return res.status(400).json({ error: 'Please provide all the fields' });
        }

        if(paymentMode !== 'CASH'){
            if(!bankId){
                return res.status(400).json({ error: 'Please provide bankId' });
            };
        };

        if(paymentMode === 'CHEQUE'){
            if(!chequeNumber){
                return res.status(400).json({ error: 'Please provide chequeNumber' });
            };
        };

        const newDate = new Date();
        session.startTransaction();
        isDBTransactionInProgress = true;

        for (let invoiceNumber of invoices) {
            // IF VENDOR PAYMENT IS CREATED
            if (partyType === 'VENDOR') {
                console.log('Adding payment for vendor...')
                const paymentPayloadToCreate = {};
                paymentPayloadToCreate.userId = req.user._id;
                paymentPayloadToCreate.amount = totalAmount;
                if (paymentMode !== 'CASH') {
                    paymentPayloadToCreate.bankId = bankId
                };
                if (paymentMode === 'CHEQUE') {
                    paymentPayloadToCreate.chequeNumber = chequeNumber;
                }
                paymentPayloadToCreate.invoiceNumber = invoiceNumber;
                paymentPayloadToCreate.paymentMode = paymentMode;
                paymentPayloadToCreate.discount = discount;
                paymentPayloadToCreate.paymentType = 'PAID';
                paymentPayloadToCreate.partyType = 'VENDOR';
                paymentPayloadToCreate.paymentStatus = 'PAID';
                paymentPayloadToCreate.createdAt = newDate;
                paymentPayloadToCreate.updatedAt = newDate;

                // Create a new payment
                const payment = new Payment(paymentPayloadToCreate, { session: session });
                // console.log("🚀 ~ addPayment ~ payment:", payment)


                const receipt = new Receipt({
                    userId: req.user._id,
                    invoiceNumber,
                    paymentId: payment._id,
                    amount: totalAmount,
                    partyType: 'VENDOR',
                    createdAt: newDate,
                    updatedAt: newDate
                }, { session: session });
                // console.log("🚀 ~ addPayment ~ receipt:", receipt)


                // Update the invoice order status to paid and add payment into and create a receipt for it also
                const purchaseOrder = await Purchase.findOne({ invoiceNumber, isDeleted: false }).session(session);

                if (!purchaseOrder) {
                    return res.status(400).json({ error: 'Purchase order not found' });
                }

                purchaseOrder.paymentStatus = 'PAID';
                purchaseOrder.remainingAmount = 0;
                purchaseOrder.payments.push({
                    paymentID: payment._id,
                    receiptID: receipt._id,
                    amount: totalAmount,
                    paymentDate: new Date(paymentDate)
                });
                // console.log("🚀 ~ addPayment ~ purchaseOrder:", purchaseOrder)

                if (bankId) {
                    const bank = await Bank.findById(bankId).session(session);
                    bank.balance = bank.balance - totalAmount;
                    await bank.save({ session });
                    // console.log("🚀 ~ addPayment ~ bank:", bank)
                };

                await payment.save({ session: session });
                await receipt.save({ session: session });
                await purchaseOrder.save({ session: session });

            };

            // IF EXPENSE PAYMENT IS CREATED
            if (partyType === 'EXPENSE') {
                console.log('Adding payment for expense...')
                const paymentPayloadToCreate = {};
                paymentPayloadToCreate.userId = req.user._id;
                paymentPayloadToCreate.amount = totalAmount;
                if (paymentMode !== 'CASH') {
                    paymentPayloadToCreate.bankId = bankId
                };
                if (paymentMode === 'CHEQUE') {
                    paymentPayloadToCreate.chequeNumber = chequeNumber;
                }
                paymentPayloadToCreate.paymentMode = paymentMode;
                paymentPayloadToCreate.discount = discount;
                paymentPayloadToCreate.invoiceNumber = invoiceNumber;
                paymentPayloadToCreate.paymentType = 'PAID';
                paymentPayloadToCreate.partyType = 'EXPENSE';
                paymentPayloadToCreate.paymentStatus = 'PAID';
                paymentPayloadToCreate.createdAt = newDate;
                paymentPayloadToCreate.updatedAt = newDate;

                // Create a new payment
                const payment = new Payment(paymentPayloadToCreate, { session: session });
                // console.log("🚀 ~ addPayment ~ payment:", payment)

                const receipt = new Receipt({
                    userId: req.user._id,
                    invoiceNumber,
                    amount: totalAmount,
                    partyType: 'EXPENSE',
                    createdAt: newDate,
                    updatedAt: newDate
                }, { session: session });
                // console.log("🚀 ~ addPayment ~ receipt:", receipt)

                const expenditure = await Expenditure.findOne({ invoiceNumber, isDeleted: false }).session(session);

                if (!expenditure) {
                    return res.status(400).json({ error: 'Expenditure not found' });
                }

                expenditure.paymentStatus = 'PAID';
                expenditure.remainingAmount = 0;
                expenditure.payments.push({
                    paymentID: payment._id,
                    receiptID: receipt._id,
                    amount: totalAmount,
                    paymentDate: new Date(paymentDate)
                });
                // console.log("🚀 ~ addPayment ~ expenditure:", expenditure)

                if (bankId) {
                    const bank = await Bank.findById(bankId).session(session);
                    bank.balance = bank.balance - totalAmount;
                    await bank.save({ session: session });
                    // console.log("🚀 ~ addPayment ~ bank:", bank)
                };

                await payment.save({ session: session });
                await receipt.save({ session: session });
                await expenditure.save({ session: session });

            };

        };

        // Commit the transaction After all work done
        await session.commitTransaction();
        isSuccess = true;

        return res.status(200).json({ msg: 'Payment added successfully!' });
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

const getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.find({ isDeleted: false, userId: req.user._id }).sort({ createdAt: -1 });
        return res.status(200).json({ msg: 'Payments fetched successfully!.', data: payments });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = { getAllPayments, getAllReceipts, addPayment }