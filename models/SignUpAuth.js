const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSubscription = Object({
  category: { type: String },
  subscribe: { type: Boolean },
});

const UserOrders = {
  order: {
    item: { type: String },
    itemId: { type: String },
    price: { type: Number },
    vendorId: { type: String },
  },
};
const SignUpAuth = new Schema(
  {
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
    userOrder: { UserOrders },
    subcription: UserSubscription,
  },
  { timestamps: true }
);

const SignupUser = mongoose.model("SignUpAuth", SignUpAuth);
module.exports = SignupUser;
