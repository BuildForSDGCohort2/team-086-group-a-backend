const {
  PostCategories,
} = require("../../controllers/vendorCategory/postCategory");
const { vendorVerifyToken } = require("../../middlewares/VendorsVerifyToken");

const vendorCategoryRouter = require("express").Router();

vendorCategoryRouter.post(
  "/dashboard/vendor/category/:vendor_id",
  vendorVerifyToken,
  PostCategories
);

module.exports = vendorCategoryRouter;
