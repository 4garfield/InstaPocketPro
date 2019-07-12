const functions = require('firebase-functions');

process.env.DIST = './';
const app = require('./server').app;

exports.ssr = functions.https.onRequest(app);
