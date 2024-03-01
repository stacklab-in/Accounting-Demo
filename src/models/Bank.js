const mongoose = require('mongoose');

const bankAccountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    accountNumber: {
        type: Number,
        required: true
    },
    ifscCode: {
        type: String,
        required: true
    },
    bankName: {
        type: String,
        required: true
    },
    branchName: {
        type: String,
        required: true
    },
    isDefault: {
        type: Boolean,
        default: false
    },
    balance: {
        type: Number,
        default: 0
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
},{timestamps: true});

const BankAccount = mongoose.model('Bank', bankAccountSchema);

module.exports = BankAccount;