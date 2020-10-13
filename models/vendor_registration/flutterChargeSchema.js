const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Metadata = new Schema({
  value: { type: String },
  display_name: { type: String, required: true },
  variable_name: { type: String, required: true },
  mobile_number: { type: String, min: 9, required: true },
});

const Card = new Schema({
  cvv: { type: String, required: true },
  number: { type: String, required: true },
  expiry_month: { type: String, required: true },
  expiry_year: { type: String, required: true },
});
const FlutterChargeModal = new Schema({
  email: { type: String, required: true },

  amount: { type: String, min: 9, required: true },
  description: { type: String, min: 9, required: true },
  currency: { type: String, enum: ["NGN"], default: "NGN", required: true },
  card: Card,
  Metadata: Metadata,
  pin: { type: String, required: true },
});

const ChargedUser = (module.exports = mongoose.model(
  "FullterwaveChargeModal",
  FlutterChargeModal
));

module.exports = ChargedUser;
