const mongoose = require('mongoose')
const { Schema } = mongoose

const WorkOrderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  checkPoints: {
    type: [
      {
        type: { type: String, default: 'Point' },
        coordinates: {
          type: [Number],
          required: true
        }
      }
    ]
  },
  driver: { type: Schema.Types.ObjectId, ref: 'users' }
}, {
  autoIndex: true
})

WorkOrderSchema.index({ 'checkPoints.coordinates': '2dsphere' })

const WorkOrder = mongoose.model('workOrders', WorkOrderSchema)

module.exports = WorkOrder
