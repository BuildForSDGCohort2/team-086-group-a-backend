/* eslint-disable no-underscore-dangle */
const { hash, genSaltSync } = require("bcryptjs");
const { validationResult } = require("express-validator");
const { sign } = require("jsonwebtoken");

const vendorController = (errResponse, AuthModel, VendorModel) => {
  const registerVendor = (req, res) => {
    // validate user request data
    const validationError = validationResult(req);
    if (!validationError.isEmpty()) {
      return errResponse(res, 422, validationError
        .array({ onlyFirstError: true }));
    }

    // get request data for utilization purposes
    const reqBody = req.body;

    // hash user password
    return hash(reqBody.password, genSaltSync(10))
      .then(async (hashString) => {
        // overwrite password with its hash version
        reqBody.password = hashString;
        reqBody.role = "vendor";

        // save auth data to database
        const newAuth = new AuthModel(reqBody);
        newAuth.save((authErr, authResult) => {
          if (authErr) {
            switch (authErr.code) {
              case 11000:
                return errResponse(res, 403, "User already exists");

              default:
                return errResponse(res, 500, authErr.message);
            }
          }

          // save vendor data to database
          const newVendor = new VendorModel(reqBody);
          return newVendor.save((vendorErr, vendorResult) => {
            if (vendorErr) {
              switch (vendorErr.code) {
                case 11000:
                  return errResponse(res, 403, "User already exists");

                default:
                  return errResponse(res, 500, vendorErr.message);
              }
            }

            // create user access token
            const userPayload = {
              authId: authResult._id,
              vendorId: vendorResult._id,
              email: result.email,
            };

            const accessTokenOptions = {
              algorithm: "HS256",
              audience: authResult.role,
              expiresIn: 600,
              issuer: "ThinkSpiceFoods",
            };
            const accessToken = sign(
              userPayload,
              process.env.RSA_PRIVATE_KEY,
              accessTokenOptions,
            );

            const refreshTokenOptions = {
              ...accessTokenOptions,
              expiresIn: 30 * 24 * 3600,
            };
            const refreshToken = sign(
              userPayload,
              process.env.RSA_PRIVATE_KEY,
              refreshTokenOptions,
            );

            const apiVersion = process.env.VERSION || "v1.0.0";
            const cookieOptions = {
              maxAge: 30 * 24 * 3600000,
              secure: false,
              sameSite: "none",
              httpOnly: true,
              path: `/api/${apiVersion}/refresh-user-session`,
              domain: req.hostname !== "localhost" ? `.${req.hostname}` : "localhost",
            };

            return res
              .status(201)
              .header("Authorization", accessToken)
              .cookie("ThinkSpiceFoodsRefresh", refreshToken, cookieOptions)
              .json({
                authId: authResult._id,
                vendorId: vendorResult._id,
                message: "Account Created Successfully",
              });
          });
        });
      })
      .catch((err) => errResponse(res, 500, err.message));
  };

  return { registerVendor };
};

module.exports = vendorController;
