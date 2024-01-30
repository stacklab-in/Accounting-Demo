const { Schema, model } = require("mongoose");

// Define Receipt Schema
const productBarcodeRoutes = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    percentageValue: { type: String, required: true, },
    value: { type: String, required: true },
    isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = model("ProductBarcodeValue", productBarcodeRoutes);
