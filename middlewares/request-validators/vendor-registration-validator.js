const { body } = require('express-validator');

const validators = [
  body('name')
    .trim(' ')
    .notEmpty()
    .withMessage('Business name is required')
    .isLength({ min: 5 })
    .withMessage('Business name must be greater than 5 characters')
    .escape(),
  body('email')
    .trim(' ')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Not a valid email')
    .normalizeEmail({ all_lowercase: true }),
  body('phone')
    .trim(' ')
    .notEmpty()
    .withMessage('Phone number is required')
    .isMobilePhone('any', { strictMode: true })
    .withMessage('Phone number must include country code'),
  body('password')
    .trim(' ')
    .notEmpty()
    .withMessage('Password is required')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9a-zA-Z]).{8,}$/)
    .withMessage('Use a strong password')
    .custom((password, { req }) => password === req.body.confirmPassword)
    .withMessage('Passwords must match')
    .escape(),
];

module.exports = validators;
