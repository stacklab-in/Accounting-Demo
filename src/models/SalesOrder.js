const { Schema, model } = require("mongoose");
const { common } = require("../utils/constants");

// Define Sales Order Schema
const salesOrderSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    customerId: { type: Schema.Types.ObjectId, ref: "Customer" },
    salesManId: { type: Schema.Types.ObjectId, ref: "Employee" },
    transactionId: { type: String, required: true },
    invoiceDate: { type: Date, required: true },
    invoiceDueDate: { type: Date, required: true },
    invoiceNumber: { type: String, required: true, unique: true },
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
    discount: {
        offer: {
            id: { type: Schema.Types.ObjectId, ref: "Offer" },
            discount: { type: Number }
        },
        productDiscount: { type: Number }
    },
    totalDiscount: { type: Number },
    totalAmount: { type: Number, required: true },
    remainingAmount: { type: Number, required: true },
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

module.exports = model("SalesOrder", salesOrderSchema);