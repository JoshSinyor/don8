const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  charityName: { type: String, unique: true },
  email: { type: String, unique: true, required: true },
  password: { type: String },
  phone: { type: String },
  charityIdNumber: { type: String },
  address: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  username: { type: String, unique: true, required: true },
  isCharity: { type: Boolean },
  isVolunteer: { type: Boolean },
  isAdmin: { type: Boolean, default: false }
})

exports.User = mongoose.model('User', userSchema);
