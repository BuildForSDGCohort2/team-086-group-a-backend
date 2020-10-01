const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlutterChargeModal = new Schema({
  email: { type: String, required: true },
  number: { type: String, min: 9, required: true },
  accountNumber: { type: String, min: 9, required: true },
  fullName: { type: String, required: true },
  currency: { type: String, enum: ["NGN"], default: "NGN", required: true },
  amount: { type: Number, min: 3, required: true },
  accountBank: { type: Number },
  txRef: { type: Schema.Types.ObjectId, min: 9, required: true },
});

module.exports = { FlutterChargeModal };
