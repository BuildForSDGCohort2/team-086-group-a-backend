const {
  PostCategories,
} = require("../../controllers/vendorCategory/postCategory");

const vendorCategoryRouter = require("express").Router();

vendorCategoryRouter.post(
  "/dashboard/vendor/category/:vendor_id/",
  PostCategories
);

module.exports = vendorCategoryRouter;
