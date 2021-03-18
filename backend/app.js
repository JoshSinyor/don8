const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const authJwt = require('./helpers/jwt')
require("dotenv/config");

app.use(cors());
app.options('*', cors());

// middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(authJwt());

// routes
const adsRouter = require('./routes/ads')
const usersRouter = require('./routes/users');

const api = process.env.API_URL;

app.use(`${api}/ads`, adsRouter)
app.use(`${api}/users`, usersRouter)

// database connection
mongoose
  .connect(process.env.DATABASE_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
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
