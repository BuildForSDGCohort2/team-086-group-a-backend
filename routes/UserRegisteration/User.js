const express = require("express");
const router = express.Router();
const SignupUser = require("../../controllers/UserRegistration/UserSignup");

//defining the signup route and passing of it malware
router.post("/signup", SignupUser.post_user_signUp);
module.exports = router;
