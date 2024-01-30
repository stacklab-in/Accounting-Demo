const { Schema, model } = require("mongoose");

// Define Product Category Schema
const productCategorySchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    description: { type: String },
    isDeleted: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = model("ProductCategory", productCategorySchema);
