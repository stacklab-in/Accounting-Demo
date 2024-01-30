const { Schema, model } = require("mongoose");

const permissionSchema = new Schema({
  sales: {
    r: { type: Boolean },
    u: { type: Boolean },
  },
  purchase: {
    r: { type: Boolean },
    u: { type: Boolean },
  },
  payment: {
    r: { type: Boolean },
    u: { type: Boolean },
  },
  receipt: {
    r: { type: Boolean },
    u: { type: Boolean },
  },
  expenditure: {
    r: { type: Boolean },
    u: { type: Boolean },
  },
  product: {
    r: { type: Boolean },
    u: { type: Boolean },
  },
  customer: {
    r: { type: Boolean },
    u: { type: Boolean },
  },
  vendor: {
    r: { type: Boolean },
    u: { type: Boolean },
  },
  employee: {
    r: { type: Boolean },
    u: { type: Boolean },
  },
  user: {
    r: { type: Boolean },
    u: { type: Boolean },
  },
  offer: {
    r: { type: Boolean },
    u: { type: Boolean },
  }
}, { _id: false });

// Define Role Schema
const roleSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  permissions: {
    type: permissionSchema, default: {}
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = model("Role", roleSchema);
