const { getOneMenu } = require("../../controllers/vendorMenu/getOneMenu");

const getOneMenuRouter = require("express").Router();

getOneMenuRouter.get(
  "/dashboard/vendor/getallmenu/:vendorId/:busines_name/:item_id",
  getOneMenu
);

module.exports = getOneMenuRouter;
