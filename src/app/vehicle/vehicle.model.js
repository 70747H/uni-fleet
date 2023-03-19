const mongoose = require('mongoose')

const VehicleSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true
  },
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  fuelType: {
    type: String,
    required: true
  },
  vin: {
    type: String,
    required: true
  },
  license: {
    type: String,
    required: true
  }
})

const Vehicle = mongoose.model('vehicles', VehicleSchema)

module.exports = Vehicle
