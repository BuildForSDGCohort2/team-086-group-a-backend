const { getCategory } = require("../../controllers/vendorCategory/getCategory");

const getCategoryRouter = require("express").Router();

getCategoryRouter.get(
  "/dashboard/vendor/category/list/:vendor_id/:business_name",
  getCategory
);

module.exports = getCategoryRouter;
