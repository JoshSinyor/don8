const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const morgan = require('morgan')
//const Ad = require('./models/ad') ? if we need this
require("dotenv/config");

// middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

// routes
const adsRouter = require('./routes/ads')

const api = process.env.API_URL;

app.use(`${api}/ads`, adsRouter)

// database connection
mongoose
  .connect(process.env.DATABASE_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database connection is ready");
  })
  .catch((err) => {
    console.log(err);
  });

// server connection check
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
