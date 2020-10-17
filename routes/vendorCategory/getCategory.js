const { getCategory } = require("../../controllers/vendorCategory/getCategory");
const {
  ver,
  vendorVerifyToken,
} = require("../../middlewares/VendorsVerifyToken");
const getCategoryRouter = require("express").Router();

getCategoryRouter.get(
  "/dashboard/vendor/category/list/:vendor_id/",
  vendorVerifyToken,
  getCategory
);

module.exports = getCategoryRouter;
