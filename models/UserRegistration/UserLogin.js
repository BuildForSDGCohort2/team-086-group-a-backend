const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthSchema = new Schema(
  {
    email: { type: String, maxlength: 100, required: true, unique: true },
    password: { type: String, required: true, maxlength: 200, minlength: 8 },
  },
  { timestamps: true }
);
const UserLogin = mongoose.model("userLogin", AuthSchema);

module.exports = UserLogin;
