const { Schema, model } = require("mongoose");
const { common } = require("../utils/constants");

// Define Sales Order Schema
const salesOrderSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    customerId: { type: Schema.Types.ObjectId, ref: "Customer" },
    salesManId: { type: Schema.Types.ObjectId, ref: "Employee" },
    transactionId: { type: String, required: true },
    invoiceDate: { type: Date, required: true },
    // invoiceDueDate: { type: Date, required: true },
    invoiceNumber: { type: String, required: true, unique: true },
    products: [
        {
            name: { type: String, required: true },
            quantity: { type: Number, required: true },
            sellingPrice: { type: Number, required: true },
            discount: { type: Number, required: true }, //In Percent
            sgst: { type: Number },
            cgst: { type: Number },
            igst: { type: Number },
            productID: { type: Schema.Types.ObjectId, ref: "Product" },
        }
    ],
    discount: {
        offer: {
            id: {},
            discount: { type: Number }
        },
        productDiscount: { type: Number },
        amount: { type: Number }
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

module.exports = model("SalesOrder", salesOrderSchema);