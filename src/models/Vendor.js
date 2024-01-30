const { Schema, model } = require("mongoose");
const { common } = require("../utils/constants");

// Define Vendor Schema
const vendorSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobileNumber: { type: String, required: true },
    type: { type: String, required: true, enum: common.userType },
    company: {
        name: { type: String, },
        gstNumber: { type: String, },
        billingAddress: {
            line1: { type: String },
            line2: { type: String },
            city: { type: String },
            state: { type: String },
            pincode: { type: Number },
        }
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = model("Vendor", vendorSchema);
