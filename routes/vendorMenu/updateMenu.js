const { updateMenu } = require("../../controllers/vendorMenu/updateMenu");

const updateMenuRouter = require("express").Router();

updateMenuRouter.put(
  "/dashboard/vendor/getallmenu/:vendorId/:busines_name/update_menu/:item_id",
  updateMenu
);

module.exports = updateMenuRouter;
