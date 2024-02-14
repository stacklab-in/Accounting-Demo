const { Schema, model } = require("mongoose");
const { expense, common } = require("../utils/constants");

// Define Expenditure Schema
const expenditureSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    price: { type: Number, required: true },
    date: { type: Date, required: true },
    invoiceNumber: { type: String },
    payments: [
        {
            paymentID: { type: Schema.Types.ObjectId, ref: 'Payment' },
            receiptID: { type: Schema.Types.ObjectId, ref: 'Receipt' },
            amount: { type: Number, },
            paymentDate: { type: Date, },
        }
    ],
    type: { type: String, required: true, enum: ['EXPENSE', 'INCOME'] },
    category: { type: String, required: true, enum: expense.category },
    paymentStatus: { type: String, required: true, enum: common.paymentStatus },
    paymentMode: { type: String, enum: common.paymentMode },
    remainingAmount: { type: Number },
    isDeleted: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = model("Expenditure", expenditureSchema);
