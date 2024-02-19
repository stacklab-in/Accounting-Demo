const { Schema, model } = require("mongoose");

// Define Receipt Schema
const passwordCreateRecord = new Schema({
    email: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    expiryDate: Date,
    uuidCode: { type: String, required: true },
    isUsed: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = model("PasswordCreateRecord", passwordCreateRecord);
