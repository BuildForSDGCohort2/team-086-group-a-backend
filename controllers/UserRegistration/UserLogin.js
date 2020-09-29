const LoginModel = require("../../models/UserRegistration/UserLogin");
const UserSignUp = require("../../models/UserRegistration/UserSignUp");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = process.env; // getting the token secret

module.exports.post_user_login = async (req, res) => {
  //getting email and password of the the user
  const { email, password } = req.body;

  //checking if email exist in the database
  const user = await UserSignUp.findOne({ email: email });
  if (!user)
    return res.status(400).send({ message: "email or password incorrect" });

  //checking if password exist in the data base;
  const isValidUser = await bcrypt.compare(password, user.password);
  if (!isValidUser)
    return res.status(400).send({
      message: "email or password incorrect",
    });

  //signing a token that will expire every 24hours
  const token = jwt.sign({ _id: user._id }, TOKEN_SECRET, {
    expiresIn: "24h", // expires in 24 hours
  });

  //chcking if the header holds the token and sending the token to the user
  res.header("auth-token", token).send({
    message: "login successful",
    status: "success",
    userId: user._id,
    token,
  });
};