const { check, validationResult } = require('express-validator');

const registrationValidator = () => {
  return [
    check('username')
      .trim()
      .isLength({ min: 1, max: 20 })
      .withMessage('username must be between 1 and 20 characters'),
    check('password')
      .trim()
      .isLength({ min: 6, max: 16 })
      .withMessage('Password must be between 6 and 16 characters'),
  ];
};
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const resultErrors = [];
  errors.errors.forEach((err) => resultErrors.push({ "reason":err.msg, source:err.path}));
  const errorObject = {status: "error", errors: resultErrors}
  return res.status(422).json(errorObject);
};

const loginValidator = () => {
  return [
    check('username')
      .trim()
      .isLength({ min: 1, max: 20 })
      .withMessage('username must be between 1 and 20 characters'),
    check('password')
      .trim()
      .isLength({ min: 6, max: 16 })
      .withMessage('Password must be between 6 and 16 characters'),
  ];
}

module.exports = {
  loginValidator,
  registrationValidator,
  validate,
};
