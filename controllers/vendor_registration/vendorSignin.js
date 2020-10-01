const {
  vendorSigninValidator,
} = require("../../middlewares/request-validators/vendor_registration_validator");

module.exports.vendorSignin = (req, res) => {
  const { vendorId, password } = req.body;
  const { error } = vendorSigninValidator.validate(req.body);
  if (error) {
    return res.status(401).json({
      message: error.details[0].message.split('"').join(""),
      status: "error",
    });
  }
};
