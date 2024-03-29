const Expenditure = require('../models/Expenditure');
const Payment = require('../models/Payment');
const Receipt = require('../models/Receipt');
const Bank = require('../models/Bank');
const mongoose = require('mongoose');
const { serverLogger } = require('../utils/loggerWinston');
const { newIdForInvoice } = require('../utils/ids');

// Function to generate invoice number based on the last one
function generateInvoiceNumber(lastInvoiceNumber, type) {
    const incrementedNumber = (parseInt(lastInvoiceNumber.slice(4), 10) + 1).toString();
    return type === 'EXPENSE' ? 'EXP-' + incrementedNumber : 'INC-' + incrementedNumber;
}

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
        console.log(requestBody);

        // Determine the type-specific search key and set isDeleted and invoiceNumber accordingly
        let searchKey = '';
        if (requestBody.type === 'EXPENSE') {
            searchKey = { type: requestBody.type, isDeleted: false };
            requestBody.isDeleted = false;
            const { invoiceNumber: lastInvoiceNumber } = await Expenditure.findOne(searchKey, {}, { sort: { 'createdAt': -1 } }) || { invoiceNumber: 'EXP-0' };
            requestBody.invoiceNumber = generateInvoiceNumber(lastInvoiceNumber, requestBody.type);
        } else if (requestBody.type === 'INCOME') {
            searchKey = { type: requestBody.type, isDeleted: false };
            requestBody.isDeleted = false;
            const { invoiceNumber: lastInvoiceNumber } = await Expenditure.findOne(searchKey, {}, { sort: { 'createdAt': -1 } }) || { invoiceNumber: 'INC-0' };
            requestBody.invoiceNumber = generateInvoiceNumber(lastInvoiceNumber, requestBody.type);
        };

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
                category: requestBody.category,
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
                category: requestBody.category,
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
        console.log(updatedData)

        for (const payment of expenditure.payments) {
            const paymentDocument = await Payment.findOne({ _id: payment.paymentID, isDeleted: false }).session(session);
            if (!paymentDocument) {
                return res.status(404).json({ error: 'Payment not found' });
            };

            paymentDocument.partyType = updatedData.type;
            paymentDocument.category = updatedData.category;

            await paymentDocument.save({ session });
            console.log({ payment })
            const receiptDocument = await Receipt.findOne({ _id: payment.receiptID, isDeleted: false }).session(session);
            if (!receiptDocument) {
                return res.status(404).json({ error: 'Receipt not found' });
            };
            receiptDocument.partyType = updatedData.type;
            receiptDocument.category = updatedData.category;

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
        const expenditureArray = await Expenditure.find({ isDeleted: false, userId: req.user._id }).sort({ createdAt: -1 }).populate('payments.paymentID');
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
    let paymentDocument;
    let receiptDocument;
    let bank;

    try {

        // Start transaction
        session.startTransaction();
        isDBTransactionInProgress = true;

        const expenditure = await Expenditure.findOne({ isDeleted: false, _id: req.body.id, userId: req.user._id }).populate('payments.paymentID').session(session);

        if (!expenditure) {
            return res.status(404).json({ error: 'Expenditure not found!..' });
        }

        expenditure.isDeleted = true;

        // Now find for the payments
        for (const payment of expenditure.payments) {
            console.log({ payment })
            paymentDocument = await Payment.findOne({ _id: payment.paymentID, isDeleted: false }).session(session);
            if (!paymentDocument) {
                return res.status(404).json({ error: 'Payment not found' });
            };
            paymentDocument.isDeleted = true;

            //  Now delete receipts
            receiptDocument = await Receipt.findOne({ _id: payment.receiptID, isDeleted: false }).session(session);
            if (!receiptDocument) {
                return res.status(404).json({ error: 'Receipt not found' });
            };
            receiptDocument.isDeleted = true;

            //  If paymentMode is not cash then we need to adjust balance in banks
            if (payment.paymentID.paymentMode !== 'CASH') {
                bank = await Bank.findOne({ _id: payment.paymentID.bankId, userId: req.user._id, isDeleted: false }).session(session);
                if (!bank) {
                    return res.status(404).json({ error: 'Bank not found' });
                };
                bank.balance = expenditure.type === 'EXPENSE' ? bank.balance + payment.paymentID.amount : bank.balance - payment.paymentID.amount;
            }
        };

        // Save Models only if they exist
        if (paymentDocument) {
            await paymentDocument.save({ session });
        };
        if (receiptDocument) {
            await receiptDocument.save({ session });
        };
        if (bank) {
            await bank.save({ session });
        }

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
    let newDate = new Date();
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
            category: expenditure.category,
            createdAt: newDate,
            updatedAt: newDate,
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
            category: expenditure.category,
            createdAt: newDate,
            updatedAt: newDate,
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
        const type = req.body.type; // VENDOR/ EXPENSE/INCOME
        const startDate = new Date(req.body.startDateValue);
        const endDate = new Date(req.body.endDateValue);
        console.log(req.body);

        // I want a object in which three keys that are cash, card,UPI and there paid amount using aggregation on payments modal
        const typeSummaryDifferedByPaymentModeTypes = await Payment.aggregate([
            {
                $match: {
                    isDeleted: false,
                    partyType: { $in: type },
                    userId: req.user._id,
                    createdAt: {
                        $gte: startDate,
                        $lte: endDate
                    }
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
        const payment = await Payment.find({
            isDeleted: false,
            userId: req.user._id,
            partyType: { $in: type },
            createdAt: {
                $gte: startDate,
                $lte: endDate
            }
        }).sort({ createdAt: -1 });

        // Calculate total sales amount
        const totalAmount = payment.reduce((acc, order) => acc + (order.amount), 0);

        let receivedBalance;
        let paidBalance;

        // Calculate total paid amount
        receivedBalance = payment.reduce((acc, order) => {
            if (order.partyType === 'INCOME') {
                return acc + order.amount;
            }
            return acc;
        }, 0);


        // Calculate total paid amount
        paidBalance = payment.reduce((acc, order) => {
            if (order.partyType === 'EXPENSE') {
                return acc + order.amount;
            }
            return acc;
        }, 0);


        const balanceSummary = {
            totalAmount: totalAmount,
            receivedBalance: receivedBalance,
            paidBalance: paidBalance,
        };

        return res.status(200).json({ msg: 'Payments fetched successfully!.', data: { balanceSummary, typeSummaryDifferedByPaymentModeTypes, payments: payment } });
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