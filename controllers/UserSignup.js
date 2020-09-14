const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;
const nodemailer = require("nodemailer");
const UserSignUp = require("../models/SignUpAuth");

exports.post_user_signUp = (res, req) => {
  const { fullName, phoneNumber, email, password } = req.body;
  const saltR = 15;
  bcrypt.genSalt(saltR, (err, salt) => {
    if (err) {
      throw err;
    } else {
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          console.error(err);
        } else {
          const regMember = new SignUpUser({
            //creating an instance of User data
            fullName,
            phoneNumber,
            email,
            password: hash,
          });

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
            }); //saving the new member to mongodb
          console.log(regMember);
          sendEmail(email, password, fullName);
        }
      });
    }
  });
};

const sendEmail = (signupMemberEmail, pass, fullName) => {
  const { EMAIL, PASSWORD } = process.env;
  let transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: `${PASSWORD}`,
      pass: `${EMAIL}`,
    },
  });

  let mailOptions = {
    from: `${EMAIL}`,
    to: signupMemberEmail,
    subject: "library app",
    html: `<h1>Hello ${fullName.toUpperCase()} </h1> <p>this mail is from ThinkSpiceFood,</p> <p>Thank you for signing up with us.</p> <p>This are your secret credentials below.</p> <p>Email: ${signupMemberEmail}\n password: ${pass}</p>`,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      throw err;
    } else {
      console.log(`email successfully sent! ${info.response}`);
    }
  });
};
