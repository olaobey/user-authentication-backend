const express = require('express');
const authController = require('../auth/authController');
const {
  loginValidator,
  registrationValidator,
  validate,
} = require('../../validations/validation');

const router = express.Router();


router
  .route('/register')
  .post(registrationValidator(), validate, authController.register);


router.route('/login').post(loginValidator(), validate, authController.login);

module.exports = router;
