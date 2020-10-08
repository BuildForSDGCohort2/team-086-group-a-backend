const Joi = require("joi");

const categoryValidation = Joi.object({
  category: Joi.array().required(),
  brandName: Joi.string().required(),
});

module.exports = { categoryValidation };
