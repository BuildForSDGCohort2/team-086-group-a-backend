const getMenuByTypeRouter = require("express").Router();
const { GetMenuByType } = require("../../controllers/vendorMenu/getMenuByType");
const { vendorVerifyToken } = require("../../middlewares/VendorsVerifyToken");

getMenuByTypeRouter.get(
  "/dashboard/vendor/menu_type/:name",
  vendorVerifyToken,
  GetMenuByType
);

module.exports = getMenuByTypeRouter;
