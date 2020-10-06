const { Mongoose, Model, Schema } = require("mongoose");

const Orders = new Schema(
  {
    name: { type: String, maxlength: 10 },
    type: { type: String, maxlength: 10 },
    image: { type: String, maxlength: 10 },
    desc: { type: String, maxlength: 100 },
    price: { type: Number },
    offers: { type: Boolean, default: false },
    discount: { type: String },
    userId: { type: String },
  },
  { timestamps: true }
);

const UserOrders = Model("UserOrder", Orders);

module.exports = { UserOrders };
