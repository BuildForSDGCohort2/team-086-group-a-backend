const jwt = require("jsonwebtoken");

module.exports.userVerifyToken = (req, res, next) => {
  //get the token secret from the .env file
  const { USER_TOKEN_SECRETE, USER_TOKEN_KEY } = process.env;
  const token = req.header(USER_TOKEN_KEY);

  if (!token) {
    return res.status(401).send({
      message: "access denied",
    });
  }

  try {
    const verified = jwt.verify(token, USER_TOKEN_SECRETE);

    //getting the userId and the token duration;
    req.user = verified;
    next();
  } catch (error) {
    res.status(401).send({
      message: "invalid token",
      status: "error",
    });
  }
};
