const { postMenus } = require("../../controllers/vendorMenu/postMenu");

const postMenuRouter = require("express").Router();

postMenuRouter.post("/dashboard/vendor/menu", postMenus);

module.exports = postMenuRouter;
