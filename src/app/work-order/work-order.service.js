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
    const updateObject = {
      rest
    }
    if (checkPoints.length) updateObject.$addToSet = { checkPoints: { $each: checkPoints } }
    return WorkOrderModel.updateOne({ _id: found.id }, updateObject)
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
