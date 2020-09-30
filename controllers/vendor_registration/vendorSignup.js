const vendorsSchema = require("../../models/vendor_registration/vendor_signup");
const {
  vendorsValidator,
} = require("../../middlewares/request-validators/vendor_registration_validator");

const bcrypt = require("bcryptjs");

const vendorSignUp = (req, res, next) => {
  const {
    owner,
    number,
    businessType,
    location,
    businessName,
    email,
    password,
  } = req.body;

  const { error } = vendorsValidator.validate(req.body);

  if (error) {
    return res
      .status(400)
      .send({ error: error.details[0].message.split('"').join("") });
  }

  next();

  const newVendor = new vendorsSchema({
    owner,
    email,
    password,
    number,
    businessType,
    location,
    businessName,
  });

  res.send(newVendor);
};

module.exports = vendorSignUp;
