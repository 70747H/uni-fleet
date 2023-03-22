const mongoose = require('mongoose')
const { Schema } = mongoose

const WorkOrderPointsSchema = new mongoose.Schema({
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  workOrder: { type: Schema.Types.ObjectId, ref: 'workorders' }
}, {
  autoIndex: true
})

WorkOrderPointsSchema.index({ location: '2dsphere' })

const WorkOrderPoints = mongoose.model('workorderpoints', WorkOrderPointsSchema)

module.exports = WorkOrderPoints
