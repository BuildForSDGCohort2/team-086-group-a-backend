const { mongoose } = require("../configs/mongodb-config");

const AuthSchema = new mongoose.Schema({
  email: {
    type: String, required: true, lowercase: true, unique: true,
  },
  password: { type: String, required: true },
}, { timestamps: true });
const AuthModel = mongoose.model("Auths", AuthSchema);

module.exports = AuthModel;
