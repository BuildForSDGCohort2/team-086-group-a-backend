const express = require("express");
const { apiNavigation } = require("../controllers/root-controller")();

const rootRouter = express.Router();

rootRouter
  .route("/")
  .get(apiNavigation);

module.exports = { rootRouter };
