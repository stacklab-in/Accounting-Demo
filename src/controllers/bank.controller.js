// Import the BankAccount model
const BankAccount = require('../models/Bank');
const BankTransferTransaction = require('../models/BankTransferTransaction');
const { serverLogger } = require('../utils/loggerWinston');
const Joi = require('joi');

// Add a bank account
const addBankAccount = async (req, res) => {
    // Define Joi schema for request body validation
    const schema = Joi.object({
        id: Joi.optional(),
        accountNumber: Joi.string().required(),
        ifscCode: Joi.string().required(),
        bankName: Joi.string().required(),
        branchName: Joi.string().required(),
        isDefault: Joi.boolean().default(false),
    });

    try {
        // Validate request body
        const { error, value } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        // Check if a bank account with the same account number already exists
        const existingBankAccount = await BankAccount.findOne({ accountNumber: value.accountNumber });
        if (existingBankAccount) {
            return res.status(400).json({ error: 'A bank account with the same account number already exists' });
        };

        const data = {
            ...value, userId: req.user._id
        };

        // Create new bank account instance
        const newBankAccount = new BankAccount(data);

        //  if bank.isDefault is true then disable all other bank accounts
        if (newBankAccount.isDefault) {
            await BankAccount.updateMany({ userId: req.user._id, _id: { $ne: newBankAccount._id } }, { isDefault: false });
        };

        // Save the bank account
        await newBankAccount.save();

        res.status(201).json({ message: 'Bank account added successfully', data: newBankAccount });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete a bank account
const deleteAccount = async (req, res) => {
    try {
        const account = await BankAccount.findById(req.body.id);
        if (!account) {
            return res.status(400).json({ error: 'Bank account not found' });
        }

        account.isDeleted = true;
        await account.save();

        return res.status(200).json({ msg: 'Account deleted successfully' });;
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Transfer funds from one bank account to another
const transferFunds = async (req, res) => {
    try {
        const { fromAccount, toAccount, amount, transferDate } = req.body;
        const fromBankAccount = await BankAccount.findById(fromAccount);
        const toBankAccount = await BankAccount.findById(toAccount);

        // Check if both accounts are same account then give error message
        if (fromAccount === toAccount) {
            return res.status(400).json({ error: 'Cant transfer funds in same accounts ' });
        };

        if (!fromBankAccount || !toBankAccount) {
            return res.status(400).json({ error: 'One or both bank accounts not found' });
        };

        if (fromBankAccount.balance < Number(amount)) {
            return res.status(400).json({ error: 'Insufficient funds' });
        }

        fromBankAccount.balance -= Number(amount);
        toBankAccount.balance += Number(amount);

        // Save the transaction details
        const transaction = new BankTransferTransaction({
            userId: req.user._id, fromAccount, toAccount, amount, transferDate: new Date(transferDate)
        });


        await transaction.save();
        await fromBankAccount.save();
        await toBankAccount.save();

        return res.status(200).json({ msg: 'Funds transferred successfully' });
    } catch (error) {
        console.log(error);
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const list = async (req, res) => {
    try {
        const banks = await BankAccount.find({ isDeleted: false, userId: req.user._id });
        res.status(200).json({ msg: 'Banks List', data: banks });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const setAsDefault = async (req, res) => {
    try {
        const { id } = req.body;
        const bank = await BankAccount.findById(id);
        if (!bank) {
            return res.status(400).json({ error: 'Bank account not found' });
        }
        bank.isDefault = !bank.isDefault;
        await bank.save();

        //  if bank.isDefault is true then disable all other bank accounts
        if (bank.isDefault) {
            await BankAccount.updateMany({ userId: req.user._id, _id: { $ne: id } }, { isDefault: false });
        };

        return res.status(200).json({ msg: 'Bank account set as default' });
    }
    catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    addBankAccount,
    deleteAccount,
    transferFunds,
    list,
    setAsDefault
};