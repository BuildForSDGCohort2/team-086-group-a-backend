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
  mobileTransfer: { type: String },
  card: { type: String },
  account: { type: String },
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

const VendorsSignup = new Schema(
  {
    businessName: { type: String, min: 6, maxlength: 50, required: true },
    location: { type: String, required: true },
    email: { type: String, required: true, maxlength: 30, unique: true },
    password: { type: String, min: 8, maxlength: 300, required: true },
    number: { type: Number, required: true, min: 9 },
    taxId: { type: String, required: true },
    subscriptionPlan: subscriptionPlan,
    businessType: businessType,
  },
  { timestamps: true }
);

const VendorsSchema = mongoose.model("vendorsSchema", VendorsSignup);

module.exports = { VendorsSchema, options, plan };
