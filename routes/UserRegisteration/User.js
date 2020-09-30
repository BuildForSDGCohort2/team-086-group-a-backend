const express = require("express");
const Router = express.Router();
const SignupUser = require("../../controllers/UserRegistration/UserSignup");

//defining the signup route and passing of it malware
Router.post("/user/signup", SignupUser.postUserSignUp);
module.exports = Router;
