const LoginModel = require("../../models/UserRegistration/UserLogin");
const UserSignUp = require("../../models/UserRegistration/UserSignUp");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { USER_TOKEN_SECRETE, USER_TOKEN_KEY } = process.env; // getting the token secret

module.exports.postUserLogin = async (req, res, next) => {
  //getting email and password of the the user
  const { email, password } = req.body;

  //checking if email exist in the database
  const user = await UserSignUp.findOne({ email: email });

  if (!user) {
    return res.status(400).json({ message: "email or password incorrect" });
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    //verify using hash password
    return res.status(400).json({
      message: "email or password incorrect",
      status: "error",
    });
  }

  //signing a token that will expire every 24hours
  const token = jwt.sign({ _id: user._id }, USER_TOKEN_SECRETE, {
    expiresIn: "24h", // expires in 24 hours
  });

  //chcking if the header holds the token and jsoning the token to the user
  res
    .cookie(USER_TOKEN_KEY, token, {
      expires: new Date(Number(new Date()) + 86400000), // expires after 24hrs
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" ? true : false,
    })
    .json({
      message: "login successful",
      status: "success",
      userId: user._id,
    });
};
