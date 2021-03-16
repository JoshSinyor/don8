const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv/config");

const api = process.env.API_URL;

app.get(`${api}/ads`, (req, res) => {
  res.send("Hello API");
});

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

app.listen(3000, () => {
  console.log(api);
  console.log("Server is running on http://localhost:3000");
});
