const { userVerifyToken } = require("../../middlewares/userVerifyToken");

const {
  getLoggedinUserObject,
} = require("../../controllers/userRequests/getUser");

const loggedInUserRouter = require("express").Router();

loggedInUserRouter.get(
  "/dashboard/loggin_user/",
  userVerifyToken,
  getLoggedinUserObject
);

module.exports = loggedInUserRouter;
