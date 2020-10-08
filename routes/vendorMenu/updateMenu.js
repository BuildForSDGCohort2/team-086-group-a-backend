const { updateMenu } = require("../../controllers/vendorMenu/updateMenu");
const { vendorVerifyToken } = require("../../middlewares/VendorsVerifyToken");

const updateMenuRouter = require("express").Router();

updateMenuRouter.put(
  "/dashboard/vendor/getallmenu/:vendorId/:busines_name/update_menu/:item_id",
  vendorVerifyToken,
  updateMenu
);

module.exports = updateMenuRouter;
