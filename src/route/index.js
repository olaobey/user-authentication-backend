const express = require('express');
const AuthRoute = require('../api/auth/authRoutes');
const dashboardRoute = require('../api/dashboard/dashboardRoutes.js')

const router = express.Router();

router.use('/auth', AuthRoute);

router.use('/home', dashboardRoute);


module.exports = router;