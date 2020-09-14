const { mongoose } = require("../configs/mongodb-config");

const AuthSchema = new mongoose.Schema({
  email: {
    type: String, required: true, lowercase: true, unique: true,
  },
  password: {
    type: String, required: true
  },
  role: {
    type: String, required: true, enum: ['admin', 'vendor', 'customer']
  },
}, { timestamps: true });
const AuthModel = mongoose.model("Auths", AuthSchema);

module.exports = AuthModel;
