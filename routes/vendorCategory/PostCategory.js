const {
  PostCategories,
} = require("../../controllers/vendorCategory/postCategory");
const { vendorVerifyToken } = require("../../middlewares/VendorsVerifyToken");

const vendorCategoryRouter = require("express").Router();

vendorCategoryRouter.post(
  "/dashboard/vendor/category/:brandName",
  vendorVerifyToken,
  PostCategories
);

module.exports = vendorCategoryRouter;
