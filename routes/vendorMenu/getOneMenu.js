const { getOneMenu } = require("../../controllers/vendorMenu/getOneMenu");
const { vendorVerifyToken } = require("../../middlewares/VendorsVerifyToken");

const getOneMenuRouter = require("express").Router();

getOneMenuRouter.get(
  "/dashboard/vendor/getallmenu/:vendorId/:busines_name/:item_id",
  vendorVerifyToken,
  getOneMenu
);

module.exports = getOneMenuRouter;
