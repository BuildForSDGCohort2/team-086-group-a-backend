const {
  getAllCategoryForUser,
} = require("../../controllers/userRequests/getAllCategory");
const { userVerifyToken } = require("../../middlewares/userVerifyToken");

const getAllCategoryForUserRouter = require("express").Router();

getAllCategoryForUserRouter.get(
  "/dashboard/user/category",
  userVerifyToken,
  getAllCategoryForUser
);

module.exports = getAllCategoryForUserRouter;
