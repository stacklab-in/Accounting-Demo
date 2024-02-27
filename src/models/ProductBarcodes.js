const { Schema, model } = require("mongoose");

// Define Receipt Schema
const productBarcode = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    barcode: { type: String, required: true, unique: true },
    purchasePrice: Number,
    productId: { type: Schema.Types.ObjectId, ref: 'Product' },
    isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = model("ProductBarcode", productBarcode);
