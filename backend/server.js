const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
require("dotenv/config");

// middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

// routes
const adsRouter = require('./routes/ads')
const usersRouter = require('./routes/users')

const api = process.env.API_URL;

app.use(`${api}/ads`, adsRouter)
app.use(`${api}/users`, usersRouter)

module.exports = app;  