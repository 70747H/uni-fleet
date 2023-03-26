const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: Number },
  mobile: { type: String },
  address: { type: { lat: { type: Number },  long: { type: Number }} },
  type: { type: String },
  vehicle: { type: Schema.Types.ObjectId, ref: 'vehicles' },
  role: { type: Schema.Types.ObjectId, ref: 'roles' }
})

const User = mongoose.model('users', UserSchema)

module.exports = User
