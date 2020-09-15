const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const UserSignUp = require("../models/SignUpAuth");

exports.post_user_signUp = (res, req) => {
  //destructuring of the user info
  const { fullName, phoneNumber, email, password } = req.body;

  //setting salt
  const saltR = 10;

  //hashing the user password
  bcrypt.genSalt(saltR, (err, salt) => {
    if (err) {
      throw err;
    } else {
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          console.error(err);
        } else {
          //creating an instance of User data
          const regMember = new UserSignUp({
            fullName,
            phoneNumber,
            email,
            password: hash,
          });

          //sending data to the database
          regMember
            .save()
            .then(() => {
              res.status(201).json({
                massage: "User added successfully",
              });
            })
            .catch((err) => {
              res.status(500).send({
                error: err,
              });
            });
          console.log(regMember);

          //getting the user info
          sendEmail(email, password, fullName);
        }
      });
    }
  });
};

//sending email to the user
const sendEmail = (signupMemberEmail, pass, fullName) => {
  const { EMAIL, PASSWORD } = process.env;

  //defining the message porter
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      adminPassword: `${PASSWORD}`,
      adminEmail: `${EMAIL}`,
    },
  });

  // message option
  let mailOptions = {
    from: `${EMAIL}`,
    to: signupMemberEmail,
    subject: "library app",
    html: `<h1>Hello ${fullName.toUpperCase()} </h1> <p>this mail is from ThinkSpiceFood,</p> <p>Thank you for signing up with us.</p> <p>This are your secret credentials below.</p> <p>Email: ${signupMemberEmail}\n password: ${pass}</p>`,
  };

  //transporting the mail to the user
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      throw err;
    } else {
      console.log(`email successfully sent! ${info.response}`);
    }
  });
};
