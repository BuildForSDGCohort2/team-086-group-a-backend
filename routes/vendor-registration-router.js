const express = require('express');
const vendorRegistrationValidator = require('../middlewares/request-validators/vendor-registration-validator');
const AuthModel = require('../models/auth-model');
const VendorModel = require('../models/vendor-model');
const errResponse = require('../utils/error-response-handler');
const { registerVendor } = require('../controllers/vendor-registration-controller')(errResponse, AuthModel, VendorModel);

const VendorRouter = express.Router();

VendorRouter
  .route('/vendor/signup')
  .post(vendorRegistrationValidator, registerVendor);

module.exports = { VendorRouter };
