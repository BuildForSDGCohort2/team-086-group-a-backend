const Joi = require("joi");

const vendorsValidator = Joi.object({
  businessName: Joi.string().min(9).required(),
  email: Joi.string().min(6).max(300).required().email(),
  officeAddress: Joi.string().min(10).required(),
  taxId: Joi.string().required(),
  businessType: Joi.string().min(4).required(),
  businessNumber: Joi.string().min(8).required(),
  subscriptionPlan: Joi.string().required(),
  paymentReference: Joi.string().required(),
  customerId: Joi.number().required(),
});

const vendorSigninValidator = Joi.object({
  vendorId: Joi.string().required().min(24).max(24).empty(),
  paymentReference: Joi.string().required().empty(),
});

module.exports = { vendorsValidator, vendorSigninValidator };
