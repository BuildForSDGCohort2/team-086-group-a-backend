const jwt = require("jsonwebtoken");

module.exports.vendorVerifyToken = (req, res, next) => {
  //get the token secret from the .env file
  const { VENDOR_TOKEN_SECRETE } = process.env;
  const token = req.header("verdor-verify-token");

  if (!token) {
    return res.status(401).send({
      message: "access denied",
    });
  }

  try {
    const verified = jwt.verify(token, VENDOR_TOKEN_SECRETE);
    console.log("verified", verified);
    //getting the userId and the token duration;
    req.vendor = verified;
    next();
  } catch (error) {
    res.status(401).send({
      message: "invalid token",
      status: "error",
    });
  }
};
