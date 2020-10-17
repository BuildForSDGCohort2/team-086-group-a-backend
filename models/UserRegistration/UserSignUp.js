const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSubscription = Object({
  category: { type: String },
  subscribe: { type: Boolean },
});

const UserOrders = {
  order: {
    item: { type: String },
    price: { type: Number },
    vendorId: { type: String },
  },
};

const SignUpUsers = new Schema(
  {
    fullName: { type: String, maxlength: 30, required: true },
    email: { type: String, maxlength: 100, required: true, unique: true },
    phoneNumber: { type: Number, maxlength: 30, min: 9, required: true },
    password: { type: String, required: true, maxlength: 200, minlength: 8 },
    userOrder: { UserOrders },
    notification: { type: Array },
    subcription: UserSubscription,
  },
  { timestamps: true }
);

const SignupUser = mongoose.model("registeredUsers", SignUpUsers);
module.exports = SignupUser;
