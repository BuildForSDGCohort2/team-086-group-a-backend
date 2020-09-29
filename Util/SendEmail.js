const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();

//sending email to the user
exports.SendEmail = (signupMemberEmail, pass, fullName) => {
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
