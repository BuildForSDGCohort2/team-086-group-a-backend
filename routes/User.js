const express = require("express");
const router = express.Router();
const SignupUser = require("../controllers/UserSignup");

router.post("user/signup", SignupUser.post_user_signUp);

module.exports = router;
