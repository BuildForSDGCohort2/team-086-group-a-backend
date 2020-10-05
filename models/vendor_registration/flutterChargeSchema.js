const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlutterChargeModal = new Schema({
  email: { type: String, required: true },
  number: { type: String, min: 9, required: true },
  accountNumber: { type: String, min: 9, required: true },
  fullName: { type: String, required: true },
  currency: { type: String, enum: ["NGN"], default: "NGN", required: true },
  amount: { type: Number, min: 3, required: true },
  bankName: { type: String, required: true },
  txRef: { type: Schema.Types.ObjectId, min: 9, required: true },
});

const ChargedUser = (module.exports = mongoose.model(
  "FullterwaveChargeModal",
  FlutterChargeModal
));

module.exports = ChargedUser;
