/* eslint-disable no-underscore-dangle */
const { hash, genSaltSync } = require('bcryptjs');
const { validationResult } = require('express-validator');
const mailer = require('../utils/email-handler');

const adminRegController = (errResponse, AuthModel) => {
  const createAdmin = (req, res) => {
    // validate user request data
    const validationError = validationResult(req);
    if (!validationError.isEmpty()) {
      return errResponse(res, 422, validationError
        .array({ onlyFirstError: true }));
    }

    // get request data for utilization purposes
    const reqBody = req.body;

    // hash user password
    const salt = genSaltSync(10);
    return hash(reqBody.password, salt)
      .then(async (hashString) => {
        // overwrite password with its hash version
        reqBody.password = hashString;
        reqBody.role = 'admin';

        // save auth data to database
        const newAuth = new AuthModel(reqBody);
        newAuth.save((authErr, authResult) => {
          if (authErr) {
            switch (authErr.code) {
              case 11000:
                return errResponse(res, 403, 'User already exists');

              default:
                return errResponse(res, 500, null, authErr);
            }
          }

          reqBody.authId = authResult._id;

          const email = reqBody.email;
          const subject = 'Activate Account';
          const text = 'Login and change your default password';
          const html = `<div style='display: flex; flex-direction: column; align-items: center'>
            <p>Dear Admin,</p>
            <br/>
            <p>Congratulations! You are now an Admin at ThinkSpiceFoods, but you are required to change your default password.</p>
            <br/>
            <p>Username: ${email}</p>
            <p>Password: ${reqBody.password}</p>
            <br/>
            <p>This will last for only 48hrs.</p>
            <p>
              Thanks,
              <br/>
              The ThinkSpiceFoods Team.
            </p>
          </div>`;
          mailer(email, subject, text, html)
            .catch(() => null);

          return res
            .status(201)
            .json({
              message: `Admin account successfully created. A mail has been sent to ${authResult.email}.`,
            });
        });
      })
      .catch((err) => errResponse(res, 500, null, err));
  };

  return { createAdmin };
};

module.exports = adminRegController;
