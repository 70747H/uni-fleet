const WorkOrderPointsModel = require('./work-order-points.model')

class WorkOrderPointsService {
  constructor () {}

  list () {
    return WorkOrderPointsModel.find().populate('driver')
  }

  create (data) {
    return WorkOrderPointsModel.create(data)
  }

  bulkCreate (id, driver, data) {
    const mappedData = data.map(item => {
      return {
        workeOrder: id,
        driver,
        location: {
          coordinates: item
        }
      }
    })
    return WorkOrderPointsModel.insertMany(mappedData)
  }

  get (id) {
    return WorkOrderPointsModel.findById(id)
  }

  getBy (filter) {
    return WorkOrderPointsModel.findOne(filter)
  }

  update (found, data) {
    const { checkPoints, ...rest } = data
    Object.assign(found, rest)
    if (checkPoints) found.checkPoints = data.checkPoints ? Object.assign(found.checkPoints, data.checkPoints) : found.checkPoints
    return found.save()
  }

  delete (id) {
    return WorkOrderPointsModel.deleteOne({ _id: id })
  }

  isNearWorkOrderPoints (data) {
    return WorkOrderPointsModel.aggregate(
      [
        {
          $geoNear: {
            near: {
              type: 'Point',
              coordinates: data
            },
            distanceField: 'distance',
            maxDistance: 100
          }
        },
        {
          $limit: 1
        }
      ]
    ).exec()
  }
}

module.exports = new WorkOrderPointsService()
