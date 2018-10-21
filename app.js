const express = require('express');
var bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


const phonePush = require('./api/routes/verification/push');
const phoneVerification = require('./api/routes/verification/verify');

app.use('/verification/push', phonePush);
app.use('/verification/verify', phoneVerification);

module.exports = app;