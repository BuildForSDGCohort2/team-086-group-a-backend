const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VendorCategory = new Schema({
  vendorId: { type: String },
  brandName: { type: String, required: "true" },
  category: { type: Array, required: "true" },
});

const VendorCategories = mongoose.model("vendorCategory", VendorCategory);

module.exports = VendorCategories;
