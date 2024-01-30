const { Schema, model } = require("mongoose");
const { purchase } = require("../utils/constants");

// Define Purchase Schema
const purchaseOrderSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    VendorId: { type: Schema.Types.ObjectId, ref: "Vendor", required: true },
    transactionId: { type: String, required: true },
    orderType: { type: String, enum: purchase.orderType },
    invoiceDate: { type: Date, required: true },
    invoiceNumber: { type: Number, required: true },
    dueDate: { type: Date, required: true },
    products: [
        {
            name: { type: String, required: true },
            quantity: { type: Number, required: true },
            sellPrice: { type: Number, required: true },
            gstValue: { type: Number, required: true },
            discount: { type: Number, required: true }, //In Percent
            netAmount: { type: Number, required: true }
        }
    ],
    appliedOfferCode: { type: String },
    totalDiscount: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    paymentMode: { type: String, enum: common.paymentMode },
    paymentStatus: { type: String, enum: common.paymentStatus },
    isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = model("SalesOrder", purchaseOrderSchema);