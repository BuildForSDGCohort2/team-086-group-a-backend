const { body } = require("express-validator");

const validators = [
  body("email")
    .trim(" ")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Not a valid email")
    .normalizeEmail({ all_lowercase: true }),
  body("password")
    .trim(" ")
    .notEmpty()
    .withMessage("Password is required")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9a-zA-Z]).{8,}$/)
    .withMessage("Use a strong password")
    .custom((password, { req }) => password === req.body.confirmPassword)
    .withMessage("Passwords must match")
    .escape(),
];

module.exports = validators;
