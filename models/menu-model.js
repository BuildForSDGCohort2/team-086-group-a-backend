const { mongoose } = require('../configs/mongodb-config');

const { Schema } = mongoose;

const MenuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: ' ',
    minlength: 2,
    maxlength: 30,
  },
  description: {
    type: String,
    trim: ' ',
    minlength: 10,
    maxlength: 100,
  },
  price: {
    type: Number,
    required: true,
    min: 0.00,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
    min: 1,
  },
  discount: { type: Number, min: 0.00, max: 100 },
  vendorId: {
    type: Schema.Types.ObjectId,
    ref: 'Vendors',
    required: true,
  },
  isRecurring: {
    type: Boolean,
    required: true,
    default: false,
  },
  frequencyOfReocurrence: {
    type: String,
    required: true,
    trim: ' ',
    minlength: 5,
    maxlength: 50,
  },
}, { timestamps: true });
const MenuModel = mongoose.model('Menus', MenuSchema);

module.exports = MenuModel;
