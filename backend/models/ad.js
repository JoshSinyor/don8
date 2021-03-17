const mongoose = require("mongoose");

const adSchema = mongoose.Schema({
  title: { type: String, required: true},
  location: { type: String, required: true},
  description: { type: String, required: true},
  contact: { type: String, required: true}
})

exports.Ad = mongoose.model('Ad', adSchema);

