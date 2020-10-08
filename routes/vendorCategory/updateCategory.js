const updateCategoryRouter = require("express").Router();
const {
  putCategory,
} = require("../../controllers/vendorCategory/updateCategory");
const { vendorVerifyToken } = require("../../middlewares/VendorsVerifyToken");

updateCategoryRouter.put(
  "/dashboard/vendor/category/list/:vendor_id/:business_name/:category_id",
  vendorVerifyToken,
  putCategory
);

module.exports = updateCategoryRouter;
