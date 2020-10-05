const jwt = require("jsonwebtoken");

module.exports.userVerifyToken = (req, res, next) => {
  //get the token secret from the .env file
  const { TOKEN_SECRET } = process.env;
  const token = req.header("user-register-token");

  if (!token) {
    return res.status(401).send({
      message: "access denied",
    });
  }

  try {
    const verified = jwt.verify(token, TOKEN_SECRET);

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
