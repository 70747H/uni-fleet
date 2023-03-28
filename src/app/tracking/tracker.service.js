'use strict'

const TrackerModel = require('./tracker.model')

class TrackerService {
  constructor () {}

  list () {
    return TrackerModel.find().populate({
      path: 'workOrder',
      populate: {
        path: 'driver',
        model: 'users'
      }
    })
  }

  create (data) {
    return TrackerModel.create(data)
  }
}

module.exports = new TrackerService()
