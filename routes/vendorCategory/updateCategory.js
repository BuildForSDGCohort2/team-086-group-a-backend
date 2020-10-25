const updateCategoryRouter = require("express").Router();
const {
  putCategory,
} = require("../../controllers/vendorCategory/updateCategory");

const { vendorVerifyToken } = require("../../middlewares/VendorsVerifyToken");

updateCategoryRouter.put(
  "/dashboard/vendor/category/list/:id",
  vendorVerifyToken,
  putCategory
);

module.exports = updateCategoryRouter;
