const { getOneMenu } = require("../../controllers/vendorMenu/getOneMenu");
const { vendorVerifyToken } = require("../../middlewares/VendorsVerifyToken");

const getOneMenuRouter = require("express").Router();

getOneMenuRouter.get(
  "/dashboard/vendor/getallmenu/:item_id",
  vendorVerifyToken,
  getOneMenu
);

module.exports = getOneMenuRouter;
