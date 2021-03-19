const express = require("express");
const app = express();
const mongoose = require("mongoose");

const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const authJwt = require('./helpers/jwt')
const errorHandler = require('./helpers/error-handler')

require("dotenv/config");

app.use(cors());
app.options('*', cors());

// middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use(authJwt());
app.use(errorHandler);

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
    useCreateIndex: true,
    useFindAndModify: false
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


// // Connect to database
// const mongoose = require("mongoose");
// require("dotenv").config();
// // Connect to port
// const app = require("./server");

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// const uri = process.env.DATABASE_CONNECTION;
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });

// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully");
// });