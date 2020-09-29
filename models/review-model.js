const { mongoose } = require("../configs/mongodb-config");

const { Schema } = mongoose;

const ReviewSchema = new mongoose.Schema(
  {
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
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    comment: {
      type: String,
      trim: " ",
      minlength: 3,
      maxlength: 255,
    },
  },
  { timestamps: true }
);
const ReviewModel = mongoose.model("Reviews", ReviewSchema);

module.exports = ReviewModel;
