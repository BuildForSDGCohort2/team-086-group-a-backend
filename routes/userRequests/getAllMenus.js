const {
  getAllMenuByUsers,
} = require("../../controllers/userRequests/getAllmenu");

const getAllMenuForUserRouter = require("express").Router();

const { userVerifyToken } = require("../../middlewares/userVerifyToken");

getAllMenuForUserRouter.get(
  "/dashboard/user/menu/",
  userVerifyToken,
  getAllMenuByUsers
);

module.exports = getAllMenuForUserRouter;
