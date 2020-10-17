const Joi = require("joi");

module.exports.notificationValidator = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string(),
  vendorNotification: Joi.any(),
});
