const Router = require("express").Router();
const loginUser = require("../../controllers/UserRegistration/UserLogin");

Router.post("/user/login", loginUser.postUserLogin);

module.exports = Router;
