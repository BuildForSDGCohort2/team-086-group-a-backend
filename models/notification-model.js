const { mongoose } = require('../configs/mongodb-config');

const { Schema } = mongoose;

const NotificationSchema = new mongoose.Schema({
  subjectId: {
    type: Schema.Types.ObjectId,
    ref: 'Auths',
    required: true,
  },
  orderId: {
    type: Schema.Types.ObjectId,
    ref: 'Orders',
    required: true,
  },
  message: {
    type: String,
    required: true,
    trim: ' ',
    minlength: 10,
  },
  messageStatus: {
    type: String,
    enum: [
      'feedback', 'order', 'news',
    ]
  },
}, { timestamps: true });
const NotificationModel = mongoose.model('Notifications', NotificationSchema);

module.exports = NotificationModel;
