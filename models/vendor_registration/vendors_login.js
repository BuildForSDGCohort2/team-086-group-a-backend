const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vendorLogin = new Schema(
  {
    vendorId: { type: Schema.Types.ObjectId, maxlength: 100, required: true },
    password: { type: String, required: true, maxlength: 200, minlength: 8 },
  },
  { timestamps: true }
);

const loginVendor = mongoose.model("vendorLogin", vendorLogin);

module.exports = loginVendor;
