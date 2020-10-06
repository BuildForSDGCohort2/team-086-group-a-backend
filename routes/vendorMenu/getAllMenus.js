const { getAllMenus } = require("../../controllers/vendorMenu/getMenus");

const getAllMenusRouter = require("express").Router();

getAllMenusRouter.get(
  "/dashboard/vendor/getallmenu/:vendorId/:busines_name",
  getAllMenus
);

module.exports = getAllMenusRouter;
