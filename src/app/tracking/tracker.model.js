const mongoose = require('mongoose')
const { Schema } = mongoose

const trackerSchema = new mongoose.Schema({
  workOrder: { type: Schema.Types.ObjectId, ref: 'workorders' },
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: {
      type: [Number],
      required: true
    }
  }
})

const Tracker = mongoose.model('tracker', trackerSchema)

module.exports = Tracker
