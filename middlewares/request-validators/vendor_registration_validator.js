const Joi = require("joi");

const vendorsValidator = Joi.object({
  owner: Joi.string().min(6).required(),
  businessType: Joi.string().min(4).required(),
  number: Joi.string().min(9).required(),
  email: Joi.string().min(6).max(300).required().email(),
  password: Joi.string().min(8).required(),
  location: Joi.string().min(10).required(),
  businessName: Joi.string().min(10).required(),
});

module.exports = { vendorsValidator };
