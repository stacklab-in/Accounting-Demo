const Payment = require('../models/Payment')
const Receipt = require('../models/Receipt');
const Purchase = require('../models/PurchaseOrder');
const Expenditure = require('../models/Expenditure');
const Bank = require('../models/Bank');
const mongoose = require('mongoose');
const SalesOrder = require('../models/SalesOrder');
const Vendor = require('../models/Vendor');
const { serverLogger } = require('../utils/loggerWinston');

const getAllReceipts = async (req, res) => {
    try {
        const receipts = await Receipt.find({ isDeleted: false, userId: req.user._id }).populate('paymentId').sort({ createdAt: -1 });
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

        if (!partyType || invoices.length === 0 || !totalAmount || (discount < 0) || !paymentDate || !paymentMode) {
            return res.status(400).json({ error: 'Please provide all the fields' });
        }

        if (paymentMode !== 'CASH') {
            if (!bankId) {
                return res.status(400).json({ error: 'Please provide bankId' });
            };
        };

        if (paymentMode === 'CHEQUE') {
            if (!chequeNumber) {
                return res.status(400).json({ error: 'Please provide chequeNumber' });
            };
        };

        const newDate = new Date();
        session.startTransaction();
        isDBTransactionInProgress = true;

        for (let invoiceNumber of invoices) {
            // IF VENDOR PAYMENT IS CREATED
            if (partyType === 'VENDOR') {
                // Update the invoice order status to paid and add payment into and create a receipt for it also
                const purchaseOrder = await Purchase.findOne({ userId: req.user._id, invoiceNumber, isDeleted: false }).session(session);

                if (!purchaseOrder) {
                    return res.status(400).json({ error: 'Purchase order not found' });
                }

                const vendor = await Vendor.findOne({ userId: req.user._id, _id: purchaseOrder.vendorId, isDeleted: false }).session(session);

                if (!vendor) {
                    return res.status(404).json({ error: 'Vendor not found' });
                };
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
                paymentPayloadToCreate.userName = vendor.name;
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
                    userName: vendor.name,
                    partyType: 'VENDOR',
                    createdAt: newDate,
                    updatedAt: newDate
                }, { session: session });
                // console.log("🚀 ~ addPayment ~ receipt:", receipt)




                purchaseOrder.paymentStatus = 'PAID';
                purchaseOrder.remainingAmount = 0;
                purchaseOrder.payments.push({
                    paymentID: payment._id,
                    receiptID: receipt._id,
                    amount: totalAmount,
                    paymentDate: new Date()
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
                console.log('Adding payment for expense...');

                const expenditure = await Expenditure.findOne({ invoiceNumber, isDeleted: false }).session(session);

                if (!expenditure) {
                    return res.status(400).json({ error: 'Expenditure not found' });
                }

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
                paymentPayloadToCreate.category = expenditure.category;
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
                    category: expenditure.category,
                    createdAt: newDate,
                    updatedAt: newDate
                }, { session: session });

                expenditure.paymentStatus = 'PAID';
                expenditure.remainingAmount = 0;
                expenditure.payments.push({
                    paymentID: payment._id,
                    receiptID: receipt._id,
                    amount: totalAmount,
                    paymentDate: new Date()
                });

                if (bankId) {
                    const bank = await Bank.findById(bankId).session(session);
                    bank.balance = bank.balance - totalAmount;
                    await bank.save({ session: session });
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

const profitAndLossStatement = async (req, res) => {
    try {
        const userId = req.user._id;

        // Fetch sales, purchases, and purchase returns concurrently
        const [sales, purchases, purchaseReturns] = await Promise.all([
            SalesOrder.find({ isDeleted: false, userId }, { payments: 1 }),
            Purchase.find({ isDeleted: false, orderType: 'PURCHASE', userId }, { payments: 1 }),
            Purchase.find({ isDeleted: false, orderType: 'RETURN', userId }, { payments: 1 })
        ]);

        const totalSalesAmount = sales.reduce((acc, data) => {
            const payments = data.payments.reduce((acc, payment) => acc + payment.amount, 0);
            return acc + payments
        }, 0);;
        const totalPurchaseAmount = purchases.reduce((acc, data) => {
            const payments = data.payments.reduce((acc, payment) => acc + payment.amount, 0);
            return acc + payments
        }, 0);
        const totalPurchaseReturnAmount = purchaseReturns.reduce((acc, data) => {
            const payments = data.payments.reduce((acc, payment) => acc + payment.amount, 0);
            return acc + payments
        }, 0);

        const grossProfit = (totalSalesAmount + totalPurchaseReturnAmount) - totalPurchaseAmount;

        // Fetch total expenses and total income concurrently
        const [totalExpenses, totalIncome] = await Promise.all([
            Expenditure.find({ isDeleted: false, type: 'EXPENSE', userId }),
            Expenditure.find({ isDeleted: false, type: 'INCOME', userId })
        ]);

        const totalExpensesAmount = totalExpenses.reduce((acc, data) => {
            const payments = data.payments.reduce((acc, payment) => acc + payment.amount, 0);
            return acc + payments
        }, 0);

        const totalIncomeAmount = totalIncome.reduce((acc, data) => {
            const payments = data.payments.reduce((acc, payment) => acc + payment.amount, 0);
            return acc + payments
        }, 0);

        const netTotal = grossProfit - totalExpensesAmount + totalIncomeAmount;

        return res.status(200).json({
            msg: 'Profit and Loss fetched successfully!',
            data: {
                totalSalesAmount,
                totalPurchaseAmount,
                totalPurchaseReturnAmount,
                grossProfit,
                totalExpensesAmount,
                totalIncomeAmount,
                netTotal
            }
        });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const dayBookDetails = async (req, res) => {

    try {
        if (!req.body.date) {
            return res.status(400).json({ error: 'Please provide date' });
        };
        const dateFilter = new Date(req.body.date); // Assuming req.body.date is in 'YYYY/MM/DD' format


        // Convert dateFilter to UTC format
        const utcDateFilter = new Date(Date.UTC(dateFilter.getFullYear(), dateFilter.getMonth(), dateFilter.getDate()));
        console.log("🚀 ~ dayBookDetails ~ utcDateFilter:", utcDateFilter)

        const payments = await Payment.find({
            userId: req.user._id,
            isDeleted: false,
            createdAt: {
                $gte: utcDateFilter, // Greater than or equal to the beginning of the specified date
                $lt: new Date(utcDateFilter.getTime() + 24 * 60 * 60 * 1000) // Less than the beginning of the next day
            }
        }).sort({ createdAt: -1 });

        // Transforming the data
        const transformedReceipts = payments.map(payment => {
            let type;
            if (payment.partyType === 'INCOME') {
                type = 'income';
            } else if (payment.partyType === 'EXPENSE') {
                type = 'expense';
            } else if (payment.partyType === 'VENDOR' && payment.paymentType === 'PAID') {
                type = 'purchase';
            } else if (payment.partyType === 'VENDOR' && payment.paymentType === 'RECEIVED') {
                type = 'purchaseReturn';
            } else if (payment.partyType === 'CUSTOMER') {
                type = 'sales';
            }
            return { ...payment.toObject(), type }; // Add the 'type' key to the object
        });

        console.log(transformedReceipts)
        //  want to transform the data add a key type in every object
        // if receipt.partyType is income then give income
        // if receipt.partyType is expense then give expense
        // if receipt.partyType is vendor then give purchase
        // if receipt.partyType is customer then give sales

        return res.status(200).json({ msg: 'Day Book Fetched Successfully', data: transformedReceipts });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const ledgers = async (req, res) => {
    try {

        if (!req.body.startDate || !req.body.endDate) {
            return res.status(400).json({ error: 'Please provide startDate and endDate' });
        };
        const startDate = new Date(req.body.startDate);
        const endDate = new Date(req.body.endDate);

        // Aggregate sales, purchases, purchase returns, expenses, and incomes
        const [sales, purchases, purchaseReturns, expenses, incomes] = await Promise.all([
            SalesOrder.aggregate([
                { $match: { isDeleted: false, userId: req.user._id, createdAt: { $gte: startDate, $lt: endDate } } },
                { $group: { _id: null, total: { $sum: { $sum: "$payments.amount" } } } }
            ]),
            Purchase.aggregate([
                { $match: { isDeleted: false, userId: req.user._id, orderType: 'PURCHASE', createdAt: { $gte: startDate, $lt: endDate } } },
                { $group: { _id: null, total: { $sum: { $sum: "$payments.amount" } } } }
            ]),
            Purchase.aggregate([
                { $match: { isDeleted: false, userId: req.user._id, orderType: 'RETURN', createdAt: { $gte: startDate, $lt: endDate } } },
                { $group: { _id: null, total: { $sum: { $sum: "$payments.amount" } } } }
            ]),
            Expenditure.aggregate([
                { $match: { isDeleted: false, userId: req.user._id, type: 'EXPENSE', createdAt: { $gte: startDate, $lt: endDate } } },
                { $group: { _id: null, total: { $sum: { $sum: "$payments.amount" } } } }
            ]),
            Expenditure.aggregate([
                { $match: { isDeleted: false, userId: req.user._id, type: 'INCOME', createdAt: { $gte: startDate, $lt: endDate } } },
                { $group: { _id: null, total: { $sum: { $sum: "$payments.amount" } } } }
            ])
        ]);

        // Calculate balances
        const ledgers = [
            { account: 'Sales', debit: 0, credit: sales.length ? sales[0].total : 0, balance: sales.length ? sales[0].total : 0 },
            { account: 'Purchases', debit: purchases.length ? purchases[0].total : 0, credit: 0, balance: purchases.length ? purchases[0].total : 0 },
            { account: 'Purchase Returns', debit: 0, credit: purchaseReturns.length ? purchaseReturns[0].total : 0, balance: purchaseReturns.length ? purchaseReturns[0].total : 0 },
            { account: 'Expenses', debit: expenses.length ? expenses[0].total : 0, credit: 0, balance: expenses.length ? expenses[0].total : 0 },
            { account: 'Incomes', debit: 0, credit: incomes.length ? incomes[0].total : 0, balance: incomes.length ? incomes[0].total : 0 }
        ];

        return res.status(200).json({ msg: 'Ledgers fetched successfully!', data: ledgers });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

const ledgerDetails = async (req, res) => {
    try {

        if (!req.body.account) {
            return res.status(400).json({ error: 'Please provide account for ledger details' });
        }

        const startDate = new Date(req.body.startDate);
        const endDate = new Date(req.body.endDate);
        const account = req.body.account;
        let accountDetails = [];

        const query = {
            isDeleted: false,
            userId: req.user._id,
            createdAt: { $gte: startDate, $lt: endDate }
        };

        if (account === 'Sales') {
            query.partyType = 'CUSTOMER';
        } else if (account === 'Purchases') {
            query.partyType = 'VENDOR';
            query.paymentType = 'PAID';
        } else if (account === 'Purchase Returns') {
            query.partyType = 'VENDOR';
            query.paymentType = 'RECEIVED';
        } else if (account === 'Expenses') {
            query.partyType = 'EXPENSE';
        } else if (account === 'Incomes') {
            query.partyType = 'INCOME';
        }

        // Fetch account details
        accountDetails = await Payment.find(query).sort({ createdAt: -1 }).lean();

        // Calculate previous balance
        const previousPayments = await Payment.find({
            ...query,
            createdAt: { $lt: startDate }
        }).lean();

        let previousBalance = previousPayments.reduce((acc, payment) => acc + payment.amount, 0);
        console.log("🚀 ~ ledgerDetails ~ previousBalance:", previousBalance)

        for (let i = accountDetails.length - 1; i >= 0; i--) {
            const payment = accountDetails[i];
            payment.balance = previousBalance + payment.amount;
            previousBalance = payment.balance; // Update balance for the next iteration
        };

        return res.status(200).json({ msg: 'Ledger Details fetched successfully!', data: accountDetails });

    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }

}
module.exports = { getAllPayments, getAllReceipts, addPayment, profitAndLossStatement, dayBookDetails, ledgers, ledgerDetails }