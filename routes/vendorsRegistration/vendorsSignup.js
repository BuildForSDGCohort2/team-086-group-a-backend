const vendorSignUpRouter = require("express").Router();

const vendorSignup = require("../../controllers/vendor_registration/vendorSignup");

vendorSignUpRouter.post("/vendor/signup", vendorSignup);

module.exports = vendorSignUpRouter;
