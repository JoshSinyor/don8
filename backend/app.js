// Connect to database
const mongoose = require("mongoose");
require("dotenv").config();
// Connect to port
const app = require("./server");

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const uri = process.env.DATABASE_CONNECTION;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
