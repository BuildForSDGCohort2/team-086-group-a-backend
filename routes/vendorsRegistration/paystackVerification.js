const {
  VerifyVendorCharge,
} = require("../../middlewares/payStackCharges/chargeVendor");

const verifyPaymentRouter = require("express").Router();

verifyPaymentRouter.get("/payment/:reference", VerifyVendorCharge);

module.exports = verifyPaymentRouter;
