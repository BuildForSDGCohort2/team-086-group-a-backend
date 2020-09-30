const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const options = Object.freeze({
  roadSide: "road side",
  restaurant: "restaurant",
  hotel: "hotel",
});

const vendorMenu = {
  name: { type: String, maxlength: 10, required: true },
  type: { type: String, maxlength: 10, required: true },
  image: { type: String, maxlength: 10, required: true },
  desc: { type: String, maxlength: 100, required: true },
  price: { type: Number, required: true },
  vendorId: { type: String, required: true },
  discount: { type: String },
  readyMeal: { type: Boolean, default: false, required: true },
  offers: { type: Boolean, default: false },
};

const businessType = {
  type: String,
  enum: ["road side", "restaurant", "hotel"],
  default: "road side",
  required: true,
};

const orders = {
  name: { type: String, maxlength: 10, required: true },
  type: { type: String, maxlength: 10, required: true },
  image: { type: String, maxlength: 10, required: true },
  desc: { type: String, maxlength: 100, required: true },
  price: { type: Number, required: true },
  offers: { type: Boolean, default: false },
  discount: { type: String },
  userId: { type: String },
};

const vendorCategory = [];

const VendorsSignup = new Schema(
  {
    owner: { type: String, maxlength: 30, required: true },
    businessName: { type: String, min: 6, maxlength: 50, required: true },
    location: { type: String, required: true },
    email: { type: String, required: true, maxlength: 30, unique: true },
    password: { type: String, min: 8, maxlength: 30, required: true },
    number: { type: Number, required: true, min: 9 },
    businessType: businessType,
    vendorMenu: vendorMenu,
    orders: [orders],
    vendorCategory: vendorCategory,
  },
  { timestamps: true }
);

const vendorsSchema = mongoose.model("vendorsSchema", VendorsSignup);

module.exports = vendorsSchema;
