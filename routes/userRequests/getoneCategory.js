const {
  getOneCategoryForUser,
} = require("../../controllers/userRequests/getOneCategory");
const { userVerifyToken } = require("../../middlewares/userVerifyToken");

const getOneCategoryForUserRouter = require("express").Router();

getOneCategoryForUserRouter.get(
  "/dashboard/user/one_category/:brandName",
  userVerifyToken,
  getOneCategoryForUser
);

module.exports = getOneCategoryForUserRouter;
