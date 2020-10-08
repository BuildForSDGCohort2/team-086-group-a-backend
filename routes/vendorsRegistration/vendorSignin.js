const vendorSignInRouter = require("express").Router();
const vendorSignin = require("../../controllers/vendor_registration/vendorSignin");

vendorSignInRouter.post("/vendor/login", vendorSignin.vendorSignin);

module.exports = vendorSignInRouter;
