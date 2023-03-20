const mongoose = require('mongoose')
const { Schema } = mongoose

const WorkOrderPointsSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  driver: { type: Schema.Types.ObjectId, ref: 'users' }
})

const WorkOrderPoints = mongoose.model('workOrders', WorkOrderPointsSchema)

module.exports = WorkOrderPoints
