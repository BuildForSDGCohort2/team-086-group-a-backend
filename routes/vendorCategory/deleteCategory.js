const deleteCategory = require("../../controllers/vendorCategory/deleteCategory");

const deleteCategoryRouter = require("express").Router();

deleteCategoryRouter.delete(
  "/dashboard/vendor/category/list/:vendor_id/:business_name/:category_id",
  deleteCategory
);

module.exports = deleteCategoryRouter;
