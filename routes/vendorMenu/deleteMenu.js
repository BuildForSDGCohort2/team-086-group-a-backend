const { deleteMenu } = require("../../controllers/vendorMenu/deleteMenu");

const deleteMenuRouter = require("express").Router();

deleteMenuRouter.delete(
  "/dashboard/vendor/getallmenu/:vendorId/:busines_name/delete_item/:item_id",
  deleteMenu
);

module.exports = deleteMenuRouter;
