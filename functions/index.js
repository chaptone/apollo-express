const functions = require('firebase-functions');
const app = require('./app.js');

const server = app()

exports.function = functions.https.onRequest(server)
