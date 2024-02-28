const { Schema, model } = require("mongoose");
const { common } = require("../utils/constants");

// Define Receipt Schema
const receiptSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    invoiceNumber: { type: String, required: true },
    amount: { type: Number, required: true },
    userName: { type: String },
    category: { type: String },
    paymentId: { type: Schema.Types.ObjectId, ref: 'Payment' },
    partyType: { type: String, required: true, enum: common.partyType },
    isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = model("Receipt", receiptSchema);
