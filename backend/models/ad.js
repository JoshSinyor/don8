const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adSchema = Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  contact: { type: String, required: true },
  charity: { type: Schema.Types.ObjectId, ref: "User" },
  image: { type: String },
  website: { type: String },
});

exports.Ad = mongoose.model("Ad", adSchema);
