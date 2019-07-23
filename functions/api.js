const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
var cors = require('cors');

const app = express();

app.use(helmet());

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

let corsOpt;
if (process.env.NODE_ENV === 'production') {
  const whitelist = ['https://instapocketpro.web.app', 'instapocketpro.firebaseapp.com']
  corsOpt = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }
} else {
  corsOpt = {};
}
const corsOptions = corsOpt;

const homeContent = require('./data/home.json')
app.get('/home', cors(corsOptions), function (req, res) {
  res.json(homeContent);
});

// catch 404
app.use(function (req, res, next) {
  res.status(404);
  res.json({
    msg: 'Request Resource Not Found'
  });
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    msg: err.message
  });
});

exports.api = app;
