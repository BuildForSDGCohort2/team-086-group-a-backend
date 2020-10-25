const { getAllMenus } = require("../../controllers/vendorMenu/getMenus");
const { vendorVerifyToken } = require("../../middlewares/VendorsVerifyToken");

const getAllMenusRouter = require("express").Router();

getAllMenusRouter.get(
  "/dashboard/vendor/getallmenu",
  vendorVerifyToken,
  getAllMenus
);

module.exports = getAllMenusRouter;
