const mongoose = require("mongoose");
const { string } = require("joi");

const Schema = mongoose.Schema;

const VendorMenu = new Schema(
  {
    brandName: { type: String, maxlength: 30 },
    name: { type: String, maxlength: 30 },
    type: { type: String, maxlength: 30 },
    image: { type: String, maxlength: 300, required: true },
    desc: { type: String, maxlength: 120 },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    readyMeal: {
      type: Boolean,
      enum: [true, false],
      default: false,
      required: true,
    },
    vendorId: { type: String, required: true },
    offers: {
      type: Boolean,
      default: false,
      enum: [true, false],
      required: true,
    },
  },
  { timestamps: true }
);

const VendorMenuList = mongoose.model("vendorMenus", VendorMenu);

module.exports = VendorMenuList;
