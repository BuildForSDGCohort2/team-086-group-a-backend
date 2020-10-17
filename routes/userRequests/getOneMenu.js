const { userVerifyToken } = require("../../middlewares/userVerifyToken");
const {
  getOneMenuForUser,
} = require("../../controllers/userRequests/getOneMenu");

const getOneMenuForUserRouter = require("express").Router();

getOneMenuForUserRouter.get(
  "/dashboard/user/one_menu/:brandName",
  userVerifyToken,
  getOneMenuForUser
);

module.exports = getOneMenuForUserRouter;
