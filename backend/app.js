const mongoose = require("mongoose");
require("dotenv/config");
const app = require("./server");

// server connection check
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});


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

module.exports = app;