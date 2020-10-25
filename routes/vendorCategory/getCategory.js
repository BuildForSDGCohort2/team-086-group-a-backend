const { getCategory } = require("../../controllers/vendorCategory/getCategory");
const { vendorVerifyToken } = require("../../middlewares/VendorsVerifyToken");
const getCategoryRouter = require("express").Router();

getCategoryRouter.get(
  "/dashboard/vendor/category/list",
  vendorVerifyToken,
  getCategory
);

module.exports = getCategoryRouter;
