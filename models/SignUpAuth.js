const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SignUpAuth = new Schema({
  fullName: { type: String, maxlength: 30, required: true },
  email: { type: String, maxlength: 100, required: true },
  phoneNumber: { type: Number, maxlength: 30, required: true },
  password: { type: String, required: true, maxlength: 15, minlength: 8 },
  confirmPassword: {
    type: String,
    required: true,
    maxlength: 15,
    minlength: 8,
  },
  timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
});

const SignupUser = mongoose.model("SignUpAuth", SignUpAuth);
module.exports = SignupUser;
