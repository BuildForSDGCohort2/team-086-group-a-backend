const Joi = require("joi");

const testimonyValidator = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().min(3).trim().required(),
  text: Joi.string().min(15).max(300).trim().required(),
  job: Joi.string().max(30).required(),
});

module.exports = { testimonyValidator };
