const { Schema, model } = require("mongoose");
const { common } = require("../utils/constants");

// Define Payment Schema
const paymentSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    amount: { type: Number, required: true },
    bankId: { type: Schema.Types.ObjectId, ref: 'Bank' },
    invoiceNumber: { type: String, required: true },
    paymentMode: { type: String, required: true, ENUM: common.paymentMode },
    paymentType: { type: String, required: true, ENUM: common.paymentType },
    partyType: { type: String, required: true, enum: common.partyType },
    paymentStatus: { type: String, required: true, enum: common.paymentStatus },
    isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = model("Payment", paymentSchema);
