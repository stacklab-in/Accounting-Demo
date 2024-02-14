const Expenditure = require('../models/Expenditure');
const Payment = require('../models/Payment');
const Receipt = require('../models/Receipt');
const Bank = require('../models/Bank');
const mongoose = require('mongoose');
const { serverLogger } = require('../utils/loggerWinston');
const { newIdForInvoice } = require('../utils/ids');


const add = async (req, res) => {
    const session = await mongoose.startSession();
    let isSuccess = false;
    let isDBTransactionInProgress = false;
    let payment;
    let receipt;
    let newExpenditure;
    const newDate = new Date();
    try {
        // Start transaction
        session.startTransaction();
        isDBTransactionInProgress = true;

        let requestBody = req.body;
        requestBody.userId = req.user._id;
        requestBody.date = new Date(requestBody.date);
        requestBody.invoiceNumber = newIdForInvoice();

        if (requestBody.paymentStatus === 'PAID') {
            // Create Payement For this Expenditure
            payment = new Payment({
                userId: req.user._id,
                amount: requestBody.price,
                ...(requestBody.bankId && { bankId: requestBody.bankId }),
                invoiceNumber: requestBody.invoiceNumber,
                paymentType: requestBody.type === 'EXPENSE' ? 'PAID' : 'RECEIVED',
                paymentMode: requestBody.paymentMode,
                partyType: 'EXPENSE',
                paymentStatus: requestBody.paymentStatus,
                isDeleted: false,
                createdAt: newDate,
                updatedAt: newDate,
            }, { session });


            if (!payment) {
                return res.status(400).json({ error: 'Error while creating payment for the expense!..' })
            };

            if (requestBody.bankId) {
                const bank = await Bank.findOne({ _id: requestBody.bankId, userId: req.user._id });
                if (!bank) {
                    return res.status(404).json({ error: 'Bank not found' });
                };
                bank.balance = requestBody.type === 'EXPENSE' ? bank.balance - requestBody.price : bank.balance + requestBody.price;
                await bank.save({ session });
            };

            // Make receipt record for this payment
            receipt = new Receipt({
                userId: req.user._id,
                amount: requestBody.price,
                invoiceNumber: requestBody.invoiceNumber,
                paymentId: payment._id,
                partyType: 'EXPENSE',
                isDeleted: false,
                createdAt: newDate,
                updatedAt: newDate,
            }, { session });

            if (!receipt) {
                return res.status(400).json({ error: 'Error while creating receipt for the expense!..' })
            };

            // Add payment object in requestBody to add expenditure
            requestBody.payments = [{
                paymentID: payment._id,
                receiptID: receipt._id,
                amount: requestBody.price,
                paymentDate: new Date()
            }];

        };

        requestBody.remainingAmount = requestBody.paymentStatus === 'PAID' ? 0 : requestBody.price;
        requestBody.createdAt = newDate;
        requestBody.updatedAt = newDate;
        newExpenditure = new Expenditure(requestBody, { session });

        if (payment) {
            await payment.save({ session });
        };

        if (receipt) {
            await receipt.save({ session });
        };

        await newExpenditure.save({ session });

        // Commit the transaction
        await session.commitTransaction();
        isSuccess = true;

        return res.status(201).json({ msg: 'Expenditure created successfully!..', data: newExpenditure });

    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        res.status(400).json({ error: error.toString() });
    } finally {
        isSuccess ? undefined : (isDBTransactionInProgress ? await session.abortTransaction() : undefined);
        // End the session
        session.endSession();
    };
};


const update = async (req, res) => {
    const session = await mongoose.startSession();
    let isSuccess = false;
    let isDBTransactionInProgress = false;

    try {
        const updatedData = req.body;

        // Start transaction
        session.startTransaction();
        isDBTransactionInProgress = true;

        const expenditure = await Expenditure.findOne(
            { userId: req.user._id, isDeleted: false, _id: req.body.id }
        ).session(session);

        if (!expenditure) {
            return res.status(404).json({ error: 'Expenditure not found' });
        };

        // update date,category and type
        expenditure.date = new Date(updatedData.date);
        expenditure.category = updatedData.category;
        expenditure.type = updatedData.type;

        for (const payment of expenditure.payments) {
            const paymentDocument = await Payment.findOne({ _id: payment.paymentID, isDeleted: false }).session(session);
            if (!paymentDocument) {
                return res.status(404).json({ error: 'Payment not found' });
            };

            paymentDocument.partyType = updatedData.type;

            await paymentDocument.save({ session });
            console.log({ payment })
            const receiptDocument = await Receipt.findOne({ _id: payment.receiptID, isDeleted: false }).session(session);
            if (!receiptDocument) {
                return res.status(404).json({ error: 'Receipt not found' });
            };
            receiptDocument.partyType = updatedData.type;

            await receiptDocument.save({ session });

        }

        await expenditure.save({ session });


        // Commit the transaction
        await session.commitTransaction();
        isSuccess = true;

        console.log(expenditure)

        // If the update is successful, you can send the updated vendor data in the response
        return res.status(200).json({ msg: 'Expenditure Updated Successfully' });

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
        const expenditureArray = await Expenditure.find({ isDeleted: false, userId: req.user._id }).populate('payments.paymentID');
        return res.status(200).json({ msg: 'Expenses fetched successfully!.', data: expenditureArray });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const remove = async (req, res) => {
    const session = await mongoose.startSession();
    let isSuccess = false;
    let isDBTransactionInProgress = false;

    try {

        // Start transaction
        session.startTransaction();
        isDBTransactionInProgress = true;

        const expenditure = await Expenditure.findOne({ isDeleted: false, _id: req.body.id, userId: req.user._id }).session(session);

        if (!expenditure) {
            return res.status(404).json({ error: 'Expenditure not found!..' });
        }

        expenditure.isDeleted = true;

        // Now find for the payments

        // Save Models
        await payment.save({ session });
        await receipt.save({ session });
        await expenditure.save({ session });
        // Commit the transaction
        await session.commitTransaction();
        isSuccess = true;

        return res.status(200).json({ msg: 'Expenditure deleted successfully!..' })

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

const recordPayment = async (req, res) => {
    const session = await mongoose.startSession();
    let isSuccess = false;
    let isDBTransactionInProgress = false;
    let payment;
    let receipt;

    try {

        const body = req.body;

        // Start transaction
        session.startTransaction();
        isDBTransactionInProgress = true;

        const expenditure = await Expenditure.findOne({ isDeleted: false, _id: req.body.id, userId: req.user._id }).session(session);
        if (!expenditure) {
            return res.status(404).json({ error: 'Expenditure not found!..' });
        };

        // Create a payment and Add a payment entry
        payment = new Payment({
            userId: req.user._id,
            amount: body.amount,
            ...(body.bankId && { bankId: body.bankId }),
            invoiceNumber: expenditure.invoiceNumber,
            paymentType: expenditure.type === 'EXPENSE' ? 'PAID' : 'RECEIVED',
            paymentMode: body.paymentMode,
            partyType: expenditure.type,
            paymentStatus: 'PAID',
            isDeleted: false
        }, { session });

        if (!payment) {
            return res.status(400).json({ error: 'Error while creating payment for the expense!..' })
        }

        if (body.bank) {
            // Update the bank balance
            const bank = await Bank.findOne({ _id: body.bank, userId: req.user._id }).session(session);
            if (!bank) {
                return res.status(404).json({ error: 'Bank not found' });
            };
            bank.balance = expenditure.type === 'EXPENSE' ? bank.balance - body.amount : bank.balance + body.amount;
            await bank.save({ session });
        };

        // Make receipt record for this payment
        receipt = new Receipt({
            userId: req.user._id,
            amount: body.amount,
            invoiceNumber: expenditure.invoiceNumber,
            paymentId: payment._id,
            partyType: expenditure.type,
            isDeleted: false
        }, { session });

        if (!receipt) {
            return res.status(400).json({ error: 'Error while creating receipt for the expense!..' })
        };

        // Add payment object in requestBody to add expenditure
        expenditure.payments.push({
            paymentID: payment._id,
            receiptID: receipt._id,
            amount: body.amount,
            paymentDate: body.paymentDate
        });

        // Update the remaining amount
        expenditure.remainingAmount = expenditure.remainingAmount - body.amount;
        // If the remaining amount is 0, then update the payment status to PAID
        expenditure.paymentStatus = expenditure.remainingAmount === 0 ? 'PAID' : 'PENDING';

        await payment.save({ session });
        await receipt.save({ session });
        await expenditure.save({ session });

        console.log(payment, receipt, expenditure)
        // Commit the transaction
        await session.commitTransaction();
        isSuccess = true;

        return res.status(200).json({ msg: 'Expenses recorded successfully!.' });
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

const getPaymentsSummary = async (req, res) => {
    try {
        // I want a object in which three keys that are cash, card,UPI and there paid amount using aggregation on payments modal
        const typeSummaryDifferedByPaymentModeTypes = await Payment.aggregate([
            {
                $match: {
                    isDeleted: false,
                    userId: req.user._id
                }
            },
            {
                $group: {
                    _id: "$paymentMode",
                    totalAmount: { $sum: "$amount" }
                }
            }
        ]);

        //  Now i want net balance, paid amount and received amount using aggregation on expenditure modal
        const expenditure = await Expenditure.find({ isDeleted: false, userId: req.user._id }).populate('payments.paymentID');

        // Calculate total sales amount
        const totalAmount = expenditure.reduce((acc, order) => acc + (order.price), 0).toFixed(2);

        // Calculate total paid amount
        const totalPaidAmount = expenditure.reduce((acc, order) => {
            const paidAmount = order.payments.reduce((total, payment) => total + payment.amount, 0);
            return acc + paidAmount;
        }, 0).toFixed(2);

        // Calculate pending amount
        const pendingAmount = (totalAmount - totalPaidAmount).toFixed(2);

        const balanceSummary = {
            totalAmount,
            totalPaidAmount,
            pendingAmount
        };

        const payments = await Payment.find({ isDeleted: false, userId: req.user._id, partyType: { $in: ['INCOME', 'EXPENSE'] } });

        return res.status(200).json({ msg: 'Payments fetched successfully!.', data: { balanceSummary, typeSummaryDifferedByPaymentModeTypes, payments } });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    };

}

module.exports = {
    add,
    update,
    list,
    remove,
    recordPayment,
    getPaymentsSummary
}