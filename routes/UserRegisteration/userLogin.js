const router = require("express").Router();
const loginUser = require("../../controllers/UserRegistration/UserLogin");

router.post("/login", loginUser.post_user_login);

module.exports = router;
