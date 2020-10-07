const updateCategoryRouter = require("express").Router();
const {
  putCategory,
} = require("../../controllers/vendorCategory/updateCategory");

updateCategoryRouter.put(
  "/dashboard/vendor/category/list/:vendor_id/:business_name/:category_id",
  putCategory
);

module.exports = updateCategoryRouter;
