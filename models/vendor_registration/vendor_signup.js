const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const options = Object.freeze({
  roadSide: "road side",
  restaurant: "restaurant",
  hotel: "hotel",
});

const vendorMenu = {
  name: { type: String, maxlength: 10 },
  type: { type: String, maxlength: 10 },
  image: { type: String, maxlength: 10 },
  desc: { type: String, maxlength: 100 },
  price: { type: Number },
  vendorId: { type: String },
  discount: { type: String },
  readyMeal: { type: Boolean, default: false },
  offers: { type: Boolean, default: false },
};

const businessType = {
  type: String,
  enum: ["road side", "restaurant", "hotel"],
  default: "road side",
  required: true,
};

const orders = {
  name: { type: String, maxlength: 10 },
  type: { type: String, maxlength: 10 },
  image: { type: String, maxlength: 10 },
  desc: { type: String, maxlength: 100 },
  price: { type: Number },
  offers: { type: Boolean, default: false },
  discount: { type: String },
  userId: { type: String },
};
``;
const vendorCategory = [];

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
    vendorMenu: vendorMenu,
    orders: [orders],
    vendorCategory: vendorCategory,
  },
  { timestamps: true }
);

const vendorsSchema = mongoose.model("vendorsSchema", VendorsSignup);

module.exports = { vendorsSchema, options, plan };
