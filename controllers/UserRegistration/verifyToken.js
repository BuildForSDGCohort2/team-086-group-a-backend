const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const { TOKEN_SECRET } = process.env;
  const token = req.header("auth-token");
  if (!token)
    return res.status(401).send({
      message: "access denied",
    });
  try {
    const verified = jwt.verify(token, TOKEN_SECRET);
    req.user = verified;
    console.log("req.user", req.user);
    next();
  } catch (error) {
    res.status(401).send({
      message: "invalid token",
      status: "error",
    });
  }
};
