const { Schema, model } = require("mongoose");
const { expense, common } = require("../utils/constants");

// Define Expenditure Schema
const expenditureSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    price: { type: Number, required: true },
    date: { type: Date, required: true },
    category: { type: String, required: true, enum: expense.category },
    paymentStatus: { type: String, required: true, enum: common.paymentStatus },
    paymentMode: { type: String, required: true, enum: common.paymentMode },
    isDeleted: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = model("Expenditure", expenditureSchema);
