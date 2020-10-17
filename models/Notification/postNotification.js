const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newNotification = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
  },
  { timestamps: true }
);

const Notifications = mongoose.model("notification", newNotification);

module.exports = Notifications;
