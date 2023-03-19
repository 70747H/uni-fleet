const WorkOrderModel = require('./work-order.model')

class WorkOrderService {
  constructor () {}

  list () {
    return WorkOrderModel.find().populate('driver')
  }

  create (data) {
    return WorkOrderModel.create(data)
  }

  get (id) {
    return WorkOrderModel.findById(id)
  }

  getBy (filter) {
    return WorkOrderModel.findOne(filter)
  }

  update (found, data) {
    const { checkPoints, ...rest } = data
    Object.assign(found, rest)
    if (checkPoints) found.checkPoints = data.checkPoints ? Object.assign(found.checkPoints, data.checkPoints) : found.checkPoints
    return found.save()
  }

  delete (id) {
    return WorkOrderModel.deleteOne({ _id: id })
  }

  isNearWorkOrderPoints (data) {
    return WorkOrderModel.aggregate(
      [
        {
          $geoNear: {
            near: {
              type: 'Point',
              coordinates: data
            },
            distanceField: 'ditance',
            maxDistance: 150
          }
        }
      ]
    )
  }
}

module.exports = new WorkOrderService()
