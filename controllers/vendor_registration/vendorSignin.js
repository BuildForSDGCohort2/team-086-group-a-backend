const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  vendorSigninValidator,
} = require("../../middlewares/request-validators/vendor_registration_validator");
const {
  VendorsSchema,
} = require("../../models/vendor_registration/vendor_signup");

module.exports.vendorSignin = async (req, res) => {
  const { vendorId, paymentReference } = req.body;

  const { VENDOR_TOKEN_SECRETE, VENDOR_TOKEN_KEY } = process.env;

  const { error } = vendorSigninValidator.validate(req.body);

  if (error) {
    return res.status(401).json({
      message: error.details[0].message.split('"').join(""),
      status: "error",
    });
  }

  const vendor = await VendorsSchema.findById({ _id: vendorId });

  if (!vendor) {
    return res.status(401).json({
      message: "access denied, vendor does not exist",
      status: "error",
    });
  }

  //checking if password exist in the data base;
  const verifyPaymentReference = await bcrypt.compare(
    paymentReference,
    vendor.paymentData.paymentReference
  );

  //verify using hash password
  if (!verifyPaymentReference) {
    return res.status(400).json({
      message: "access denied: criteria failed, put in the correct criteria",
      status: "error",
    });
  }

  //signing a token that will expire every 24hours
  const token = jwt.sign({ _id: vendor._id }, VENDOR_TOKEN_SECRETE, {
    expiresIn: "24h", // expires in 24 hours
  });

  res
    .cookie(VENDOR_TOKEN_KEY, token, {
      secure: process.env.NODE_ENV === "production" ? true : false,
      httpOnly: true,
    })
    .json({
      token: token,
    });
};
