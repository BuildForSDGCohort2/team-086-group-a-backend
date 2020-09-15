const express = require("express");
const adminRegistrationValidator = require("../middlewares/request-validators/admin-registration-validator");
const adminAuth = require("../middlewares/auth-admin");
const AuthModel = require("../models/auth-model");
const errResponse = require("../utils/error-response-handler");
const { createAdmin } = require("../controllers/admin-registration-controller")(errResponse, AuthModel);

const AdminRouter = express.Router();

AdminRouter
  .route("/dashboard/admin/login")
  .post(adminAuth, adminRegistrationValidator, createAdmin);

module.exports = { AdminRouter };
