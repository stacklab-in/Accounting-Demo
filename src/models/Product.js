const { Schema, model } = require("mongoose");

// Define Product Schema
const productSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    // category: { type: Schema.Types.ObjectId, ref: 'ProductCategory' },
    purchasePrice: { type: Number, required: true },
    sellingPrice: { type: Number, required: true },
    gstValue: { type: String },
    sgst: { type: String },
    cgst: { type: String },
    igst: { type: String },
    quantity: { type: Number, default: 0 },
    code: { type: String, required: true },
    // vendorId: { type: Schema.Types.ObjectId, ref: "Vendor" },
    isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = model("Product", productSchema);
