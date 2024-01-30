const { Schema, model } = require("mongoose");
const { offer, generateOfferCode } = require("../utils/constants");

// Define Receipt Schema
const offerSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    code: { type: String, required: true, unique: true },
    description: { type: String, },
    status: { type: String, enum: offer.status, default: 'DRAFT' },
    type: { type: String, required: true, enum: offer.type },
    typeValue: { type: String, required: true },
    isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = model("Offer", offerSchema);
