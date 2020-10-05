const { Payment } = require("../../Util/flutterPay");
const router = require("express").Router();

router.post("/payment", Payment);

module.exports = router;
