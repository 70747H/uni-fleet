const TrackerModel = require('./tracker.model')

class TrackerService {
  constructor () {}

  create (data) {
    return TrackerModel.create(data)
  }
}

module.exports = new TrackerService()
