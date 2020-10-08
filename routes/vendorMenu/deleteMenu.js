const { deleteMenu } = require("../../controllers/vendorMenu/deleteMenu");
const { vendorVerifyToken } = require("../../middlewares/VendorsVerifyToken");

const deleteMenuRouter = require("express").Router();

deleteMenuRouter.delete(
  "/dashboard/vendor/getallmenu/:vendorId/:busines_name/delete_item/:item_id",
  vendorVerifyToken,
  deleteMenu
);

module.exports = deleteMenuRouter;
