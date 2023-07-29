const express = require('express');
const dashboardController = require('./dashboardController.js')
const verifyJWT = require('../../middleware/authentication.js'); 


const router = express.Router();

router.route('/dashboard').get(verifyJWT, dashboardController.getDashboard);

module.exports = router;
