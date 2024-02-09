const mongoose = require('mongoose');

// Define the schema for bank transactions
const BankTransactionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    fromAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bank',
        required: true
    },
    toAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bank',
        required: true
    },
    transferDate: {
        type: Date,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });

// Create a model for the bank transaction schema
module.exports = mongoose.model('BankTransaction', BankTransactionSchema);