const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
module.exports.vendorVerifyToken = async (req, res, next) => {
  //get the token secret from the .env file
  const { VENDOR_TOKEN_SECRETE, VENDOR_TOKEN_KEY } = process.env;
  // const token = req.header(VENDOR_TOKEN_KEY);
  const token = req.cookies[VENDOR_TOKEN_KEY] || "";

  if (!token) {
    return res.status(401).send({
      message: "access denied",
      status: "error",
    });
  }

  try {
    const verified = jwt.verify(token, VENDOR_TOKEN_SECRETE);
    //getting the userId and the token duration;
    req.vendor = verified;

    next();
  } catch (error) {
    res.status(401).json({
      message: "invalid token",
      status: "error",
    });
  }
};
