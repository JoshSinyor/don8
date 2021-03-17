const mongoose = require("mongoose");

const adSchema = mongoose.Schema({
  title: String,
  location: String,
  description: String,
  contact: String,
})

exports.Ad = mongoose.model('Ad', adSchema);

