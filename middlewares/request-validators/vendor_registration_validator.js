const Joi = require("joi");

const vendorsValidator = Joi.object({
  businessName: Joi.string().min(9).required(),
  email: Joi.string().min(6).max(300).required().email(),
  officeAddress: Joi.string().min(10).required(),
  taxId: Joi.string().required(),
  businessType: Joi.string().min(4).required(),
  businessNumber: Joi.string().min(8).required(),
  subscriptionPlan: Joi.string().required(),
});

const vendorSigninValidator = Joi.object({
  password: Joi.string().min(8).required().empty(),
  vendorId: Joi.string().required().empty(),
});

module.exports = { vendorsValidator, vendorSigninValidator };
