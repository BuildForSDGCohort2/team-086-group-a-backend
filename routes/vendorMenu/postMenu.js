const { postMenus } = require("../../controllers/vendorMenu/postMenu");

const router = require("express").Router();

router.post("/dashboard/vendor/menu", postMenus);

module.exports = router;
