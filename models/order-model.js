const { mongoose } = require("../configs/mongodb-config");

const { Schema } = mongoose;

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: " ",
    minlength: 2,
    maxlength: 30,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
    min: 1,
  },
  discount: { type: Number, min: 0, max: 100 },
}, { timestamps: true });

const OrderSchema = new mongoose.Schema({
  customerId: {
    type: Schema.Types.ObjectId,
    ref: "Customers",
    required: true,
  },
  vendorId: {
    type: Schema.Types.ObjectId,
    ref: "Vendors",
    required: true,
  },
  description: {
    type: String,
    trim: " ",
    minlength: 10,
    maxlength: 100,
  },
  itemsOrdered: [ItemSchema],
  amountDue: {
    type: Number,
    required: true,
    min: 0,
  },
  amountPaid: {
    type: Number,
    required: true,
    min: 0,
  },
  orderStatus: {
    type: String,
    enum: [
      "received", "pending", "taken", "cooking", "ready", "enroute", "delivered",
    ]
  },
  menuId: {
    type: Schema.Types.ObjectId,
    ref: "Menus",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
    min: 1,
  },
  discount: { type: Number, min: 0, max: 100 },
}, { timestamps: true });
const OrderModel = mongoose.model("Orders", OrderSchema);

module.exports = OrderModel;
