const Joi = require("joi");

const vendorsMenuValidator = Joi.object({
  name: Joi.string().required(),
  image: Joi.string(),
  type: Joi.string().min(3).max(30).trim().required(),
  desc: Joi.string().min(15).max(300).trim().required(),
  price: Joi.number().min(2).required(),
  discount: Joi.number().empty("").default(0),
  readyMeal: Joi.boolean().required(),
  offers: Joi.boolean().required(),
});

module.exports = { vendorsMenuValidator };
