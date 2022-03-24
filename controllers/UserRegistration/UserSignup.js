const bcrypt = require("bcryptjs");
const UserSignUp = require("../../models/UserRegistration/UserSignUp");
const SendEmail = require("../../Util/SendEmail");

exports.postUserSignUp = async (req, res) => {
  //destruct the req body
  const { fullName, email, password, phoneNumber } = req.body;
  //checking if email exist
  const emailExist = await UserSignUp.findOne({ email: email });
  if (emailExist) {
    return res
      .status(400)
      .json({ message: "user already exist", status: "error" });
  }

  //assigning the salt to use
  const saltR = 10;

  bcrypt.genSalt(saltR, async (err, salt) => {
    if (err) {
      return res.status(400).json({
        message: "unathorized  error",
        status: "error",
      });
    } else {
      //hashing the password
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) {
          return res.status(401).json({
            message: "user validation failed",
            status: "error",
          });
        } else {
          const member = new UserSignUp({
            //creating an instance of User data
            fullName,
            email,
            phoneNumber,
            password: hash,
          });

          try {
            //saving the new member to mongodb
            await member.save();
            return res.status(201).json({
              massage: "User added successfully",
              userId: member._id,
              status: "success",
            });

            // send.send(email, password, fullName);
          } catch (error) {
            console.log("error", error);
            return res.status(400).json({
              message: error,
              status: "error",
            });
          }
        }
      });
    }
  });
};
