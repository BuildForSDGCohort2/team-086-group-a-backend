const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const options = Object.freeze({
  roadSide: "roadside",
  restaurant: "restaurant",
  hotel: "hotel",
});

const businessType = {
  type: String,
  enum: ["roadside", "restaurant", "hotel"],
  default: "roadside",
  required: true,
};

const paymentType = {
  type: String,
  enum: ["mobile transfer", "card", "account"],
  default: "card",
};

const plan = Object.freeze({
  monthly: "monthly",
  quaterly: "quaterly",
  annually: "annually",
});

const subscriptionPlan = {
  type: String,
  enum: ["monthly", "quarterly", "annually"],
  default: "monthly",
};

const paymentData = new Schema({
  paymentReference: { type: String, required: true },
  customerId: { type: Number, require: true },
});

const VendorsSignup = new Schema(
  {
    businessName: { type: String, min: 6, maxlength: 50, required: true },
    email: { type: String, required: true, maxlength: 30, unique: true },
    officeAddress: { type: String, required: true },
    businessNumber: { type: Number, required: true, min: 9 },
    taxId: { type: String, required: true },
    subscriptionPlan: subscriptionPlan,
    businessType: businessType,
    paymentData: paymentData,
    paymentType: paymentType,
  },
  { timestamps: true }
);

const VendorsSchema = mongoose.model("vendorsSchema", VendorsSignup);

module.exports = { VendorsSchema, options, plan };
