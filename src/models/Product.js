const { Schema, model } = require("mongoose");

// Define Product Schema
const productSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'ProductCategory' },
    purchasePrice: { type: Number, required: true },
    sellingPrice: { type: Number, required: true },
    gstValue: { type: String, required: true },
    quantity: { type: Number, required: true },
    barcode: { type: Number, required: true },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = model("Product", productSchema);
