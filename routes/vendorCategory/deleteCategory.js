const deleteCategory = require("../../controllers/vendorCategory/deleteCategory");
const { vendorVerifyToken } = require("../../middlewares/VendorsVerifyToken");

const deleteCategoryRouter = require("express").Router();

deleteCategoryRouter.delete(
  "/dashboard/vendor/category/list/:vendor_id/:business_name/:category_id",
  vendorVerifyToken,
  deleteCategory
);

module.exports = deleteCategoryRouter;
