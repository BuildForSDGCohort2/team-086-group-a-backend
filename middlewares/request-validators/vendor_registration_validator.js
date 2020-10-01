const Joi = require("joi");

const vendorsValidator = Joi.object({
  subscriptionPlan: Joi.string().required(),
  taxId: Joi.string().required(),
  businessType: Joi.string().min(4).required(),
  number: Joi.string().min(9).required(),
  email: Joi.string().min(6).max(300).required().email(),
  password: Joi.string().min(8).required(),
  location: Joi.string().min(10).required(),
  businessName: Joi.string().min(10).required(),
});

const vendorSigninValidator = Joi.object({
  password: Joi.string().min(8).required().empty(),
  vendorId: Joi.string().required().empty(),
});

module.exports = { vendorsValidator, vendorSigninValidator };
