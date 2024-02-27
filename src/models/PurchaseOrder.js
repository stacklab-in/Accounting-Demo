const { Schema, model } = require("mongoose");
const { purchase } = require("../utils/constants");

// Define Purchase Schema
const purchaseOrderSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    vendorId: { type: Schema.Types.ObjectId, ref: "Vendor", required: true },
    transactionId: { type: String, required: true },
    orderType: { type: String, enum: purchase.orderType },
    purchaseDate: { type: Date, required: true },
    // purchaseDueDate: { type: Date, required: true },
    referenceNumber: { type: String },
    invoiceNumber: { type: String, required: true },
    products: [
        {
            name: { type: String, required: true },
            quantity: { type: Number, required: true },
            sellingPrice: { type: Number, required: true },
            gstValue: { type: Number, required: true },
            discount: { type: Number, required: true }, //In Percent
            netAmount: { type: Number, required: true }
        }
    ],
    discount: {
        productDiscount: { type: Number }
    },
    totalDiscount: { type: Number },
    totalAmount: { type: Number, required: true },
    remainingAmount: { type: Number, required: true },
    paymentStatus: { type: String },
    payments: [
        {
            paymentID: { type: Schema.Types.ObjectId, ref: 'Payment' },
            receiptID: { type: Schema.Types.ObjectId, ref: 'Receipt' },
            amount: { type: Number, required: true },
            paymentDate: { type: Date, required: true },
        }
    ],
    isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = model("PurchaseOrder", purchaseOrderSchema);