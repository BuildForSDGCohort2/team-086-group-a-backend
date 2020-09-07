const { mongoose } = require('../configs/mongodb-config');

const CustomerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: ' ',
    minlength: 2,
    maxlength: 30,
  },
  lastName: {
    type: String,
    required: true,
    trim: ' ',
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    trim: ' ',
    lowercase: true,
    unique: true,
    minlength: 10,
    maxlength: 100,
  },
  phone: {
    type: String,
    required: true,
    trim: ' ',
    minlength: 5,
    maxlength: 100,
  },
  amountOutstanding: {
    type: Number,
    min: 0.00,
  },
}, { timestamps: true });

const CustomerModel = mongoose.model('Customers', CustomerSchema);

module.exports = CustomerModel;
