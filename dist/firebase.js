const functions = require('firebase-functions');

process.env.DIST = './'
const app = require('./server/server').app;

exports.ssr = functions.https.onRequest(app);
