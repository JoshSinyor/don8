const cors = require("cors");
const authJwt = require("./helpers/jwt");
const errorHandler = require("./helpers/error-handler");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("dotenv/config");

// middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(cors());
app.use("/public/uploads", express.static(__dirname + "/public/uploads"));
app.options("*", cors());
app.use(authJwt());
app.use(errorHandler);

// routes
const adsRouter = require("./routes/ads");
const usersRouter = require("./routes/users");

const api = process.env.API_URL;

app.use(`${api}/ads`, adsRouter);
app.use(`${api}/users`, usersRouter);

module.exports = app;
