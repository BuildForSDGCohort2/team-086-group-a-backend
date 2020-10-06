const express = require("express");
const postUsersRouter = express.Router();
const SignupUser = require("../../controllers/UserRegistration/UserSignup");

//defining the signup route and passing of it malware
postUsersRouter.post("/user/signup", SignupUser.postUserSignUp);
module.exports = postUsersRouter;
