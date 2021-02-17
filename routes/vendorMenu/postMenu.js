const postMenuRouter = require("express").Router();
const { postMenus } = require("../../controllers/vendorMenu/postMenu");
const { vendorVerifyToken } = require("../../middlewares/VendorsVerifyToken");
const upload = require("../../middlewares/cloudinaryUpload/cloudinaryUpload");
postMenuRouter.post(
  "/dashboard/vendor/menu/",

  vendorVerifyToken,
  upload.single("image"),
  postMenus
);

module.exports = postMenuRouter;
