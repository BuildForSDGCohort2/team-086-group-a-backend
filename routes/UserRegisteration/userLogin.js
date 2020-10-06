const loginUsersRouter = require("express").Router();
const loginUser = require("../../controllers/UserRegistration/UserLogin");

loginUsersRouter.post("/user/login", loginUser.postUserLogin);

module.exports = loginUsersRouter;
