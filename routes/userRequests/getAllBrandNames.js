const {
  getAllCategory,
} = require("../../controllers/userRequests/getAllBrandNames");
const { userVerifyToken } = require("../../middlewares/userVerifyToken");

const getAllBrandNamesRouter = require("express").Router();

getAllBrandNamesRouter.get("/menu/all", userVerifyToken, getAllCategory);

module.exports = getAllBrandNamesRouter;
