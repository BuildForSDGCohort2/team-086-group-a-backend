const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Testimonies = new Schema(
  {
    text: { type: String, maxlength: 200, required: true },
    image: { type: String, required: true },
    name: { type: String, maxlength: 50, required: true },
    memberId: { type: String, maxlength: 24, min: 24, required: true },
    job: { type: String, maxlength: 20, required: true },
  },
  { timestamps: true }
);

const Testemony = mongoose.model("testimony", Testimonies);

module.exports = Testemony;
