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
  isCharity: { type: Boolean, default: true },
  isVolunteer: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false }
})

userSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

userSchema.set('toJSON', {
  virtuals: true,
});

exports.User = mongoose.model('User', userSchema);
