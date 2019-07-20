const functions = require('firebase-functions');

const app = require('./server').app;

const api = require('./api').api;

exports.ssr = functions.https.onRequest(app);

exports.api = functions.https.onRequest(api);
