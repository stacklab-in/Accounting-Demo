const { Schema, model } = require("mongoose");

const address = {
    line1: { type: String },
    line2: { type: String },
    city: { type: String },
    state: { type: String },
    pincode: { type: Number },
};

// Define Receipt Schema
const employeeSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    address,
    attendance: {},
    isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = model("Employee", employeeSchema);
