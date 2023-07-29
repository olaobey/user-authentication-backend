const express = require('express');
const path = require('path');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');
const morganLogger = require('./middleware/morganLogger');
const Router = require('../src/route/index');
const errorHandler  = require('./middleware/errorHandler');


const app = express();

// middleware to handle an incoming request and also Support json encoded bodies
app.use(express.json()); 

app.use(morganLogger());

app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());

// secure HTTP headers setting middleware
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));

// Allow cross-origin resource sharing
app.use(cors({ origin: '*' }));

app.use(helmet());

app.set('trust proxy', true)

// Prevent parameter pollution
app.use(hpp());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());



app.use('/api/v1', Router);

app.set('view engine', 'ejs');

// send back a 404 error for any unknown api request
app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ message: '404 Not Found' });
  } else {
    res.type('txt').send('404 Not Found');
  }
});

// Global Error handler
app.use(errorHandler);

module.exports = app;
