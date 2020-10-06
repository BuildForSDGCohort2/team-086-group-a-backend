const Joi = require("joi");

const vendorsMenuValidator = Joi.object({
  brandName: Joi.string().required(),
  name: Joi.string().required(),
  type: Joi.string().min(3).max(30).trim().required(),
  image: Joi.string().min(3).max(200).trim().required(),
  desc: Joi.string().min(15).max(300).trim().required(),
  price: Joi.number().min(2).required(),
  vendorId: Joi.string().min(24).required(),
  discount: Joi.number().empty("").default(0),
  readyMeal: Joi.boolean().required(),
  offers: Joi.boolean().required(),
});

module.exports = { vendorsMenuValidator };
