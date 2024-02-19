const { Schema, model } = require("mongoose");
const { common } = require("../utils/constants");

const address = {
    line1: { type: String },
    line2: { type: String },
    city: { type: String },
    state: { type: String },
    pincode: { type: Number },
};
// Define Customer Schema
const customerSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    email: { type: String },
    mobileNumber: { type: String, required: true, unique: true },
    type: { type: String },
    company: {
        name: { type: String, },
        gstNumber: { type: String, },
        billingAddress: address,
        shippingAddress: address,
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = model("Customer", customerSchema);
