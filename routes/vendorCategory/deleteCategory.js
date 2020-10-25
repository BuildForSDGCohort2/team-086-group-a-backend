const deleteCategory = require("../../controllers/vendorCategory/deleteCategory");
const { vendorVerifyToken } = require("../../middlewares/VendorsVerifyToken");

const deleteCategoryRouter = require("express").Router();

deleteCategoryRouter.delete(
  "/dashboard/vendor/category/list/:category_id",
  vendorVerifyToken,
  deleteCategory
);

module.exports = deleteCategoryRouter;
