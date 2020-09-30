const vendorSignUp = require("../../controllers/vendor_registration/vendorSignup");

const Router = require("express").Router();
const vendorSignup = require("../../controllers/vendor_registration/vendorSignup");

Router.post("/vendor/signup", vendorSignup);

module.exports = Router;
