const Joi = require("joi");

const memberReportValidator = Joi.object({
  text: Joi.string().required().max(200),
  memberId: Joi.string(),
});

module.exports = { memberReportValidator };
