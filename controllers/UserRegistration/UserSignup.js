const bcrypt = require("bcryptjs");
const UserSignUp = require("../../models/UserRegistration/UserSignUp");
const SendEmail = require("../../Util/SendEmail");

exports.postUserSignUp = async (req, res) => {
  //destruct the req body
  const { fullName, email, password, phoneNumber } = req.body;

  //checking if email exist
  const emailExist = await UserSignUp.findOne({ email: email });
  if (emailExist) {
    return res.status(400).send({ message: "user already exist" });
  }

  //assigning the salt to use
  const saltR = 10;
  bcrypt.genSalt(saltR, async (err, salt) => {
    if (err) {
      res.status(400).send({
        message: "unathorized  error",
        status: "error",
      });
    } else {
      //hashing the password
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) {
          res.status(401).send({
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
            res.status(201).send({
              massage: "User added successfully",
              userId: member._id,
              status: "success",
            });

            // SendEmail.SendEmail(email, password, fullName);
          } catch (error) {
            res.status(400).send({
              message: error,
              status: "error",
            });
          }
        }
      });
    }
  });
};
