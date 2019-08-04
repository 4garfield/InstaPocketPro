const express = require('express');
var _ = require('lodash');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');

const app = express();

app.use(helmet());
app.use(compression());

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.set('etag', 'strong');

let config;
if (process.env.NODE_ENV === 'production') {
  config = require('./config/production.json');
} else {
  config = require('./config/default.json');
}
const corsOptions = config['cors'];

app.get('/', cors(), function (req, res) {
  res.json({
    msg: 'hello'
  });
});

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
