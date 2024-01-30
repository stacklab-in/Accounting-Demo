const { Schema, model } = require("mongoose");
const { common } = require("../utils/constants");

// Define Receipt Schema
const receiptSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    invoiceNumber: { type: Number, required: true, unique: true },
    amount: { type: Number, required: true },
    paymentMode: { type: String, required: true, ENUM: common.paymentMode },
    paymentStatus: { type: String, required: true, enum: common.paymentStatus },
    partyType: { type: String, required: true, enum: common.partyType },
    isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = model("Receipt", receiptSchema);
