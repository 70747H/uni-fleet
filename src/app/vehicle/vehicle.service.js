const vehicleModel = require('./vehicle.model')

class VehicleService {
  constructor () {}

  list () {
    return vehicleModel.find().populate('driver')
  }

  create (data) {
    return vehicleModel.create(data)
  }

  get (id) {
    return vehicleModel.findById(id).populate('driver')
  }

  getBy (filter) {
    return vehicleModel.findOne(filter)
  }

  update (id, data) {
    return vehicleModel.updateOne({ _id: id }, data)
  }

  delete (id) {
    return vehicleModel.deleteOne({ _id: id })
  }
}

module.exports = new VehicleService()
