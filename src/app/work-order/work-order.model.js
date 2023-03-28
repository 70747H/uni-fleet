'use strict'

const mongoose = require('mongoose')
const { Schema } = mongoose

const WorkOrderSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  driver: { type: Schema.Types.ObjectId, ref: 'users', required: true },
  vehicle: { type: Schema.Types.ObjectId, ref: 'vehicles', required: true },
  checkPoints: [{ type: Schema.Types.ObjectId, ref: 'workorderpoints', required: true }],
  startDate: { type: String, required: true },
  startedOn: { type: Date },
  endedOn: { type: Date },
  status: { type: String, enum: ['started', 'ended', 'idle'], default: 'idle' }
})

const WorkOrder = mongoose.model('workorders', WorkOrderSchema)

module.exports = WorkOrder
