const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  mobile: {
    type: String
  },
  address: {
    type: {
      lat: { type: Number },
      long: { type: Number }
    }
  },
  type: {
    type: String
  }
})

const User = mongoose.model('users', UserSchema)

module.exports = User
