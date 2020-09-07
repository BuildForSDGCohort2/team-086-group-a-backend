const { mongoose } = require("../configs/mongodb-config");

const VendorSchema = new mongoose.Schema({
  businessName: {
    type: String,
    required: true,
    trim: " ",
    minlength: 2,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    trim: " ",
    lowercase: true,
    unique: true,
    minlength: 10,
    maxlength: 100,
  },
  phone: {
    type: String,
    required: true,
    trim: " ",
    minlength: 5,
    maxlength: 100,
  },
  averageRating: {
    type: Number,
    min: 0,
    max: 5,
  },
}, { timestamps: true });

const VendorModel = mongoose.model("Vendors", VendorSchema);

module.exports = VendorModel;
