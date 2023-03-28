'use strict'

const WorkOrderPointsModel = require('./work-order-points.model')

class WorkOrderPointsService {
  constructor () {}

  list () {
    return WorkOrderPointsModel.find().populate('driver')
  }

  create (data) {
    return WorkOrderPointsModel.create(data)
  }

  bulkCreate (workOrder, data) {
    const mappedData = data.map(item => {
      return {
        workOrder,
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

  update (id, data) {
    return WorkOrderPointsModel.updateOne({ _id: id }, data)
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
