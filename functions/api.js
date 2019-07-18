const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const app = express();

app.use(helmet());

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/api', function (req, res) {
  res.json({
    message: 'hello world!'
  });
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
