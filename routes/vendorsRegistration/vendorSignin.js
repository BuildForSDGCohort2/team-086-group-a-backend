const router = require("express").Router();
const vendorSignin = require("../../controllers/vendor_registration/vendorSignin");

router.post("/vendor/login", vendorSignin.vendorSignin);

module.exports = router;
