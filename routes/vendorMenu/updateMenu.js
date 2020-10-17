const { updateMenu } = require("../../controllers/vendorMenu/updateMenu");
const { vendorVerifyToken } = require("../../middlewares/VendorsVerifyToken");

const updateMenuRouter = require("express").Router();

updateMenuRouter.put(
  "/dashboard/vendor/update_menu/:vendorId/:item_id",
  vendorVerifyToken,
  updateMenu
);

module.exports = updateMenuRouter;
