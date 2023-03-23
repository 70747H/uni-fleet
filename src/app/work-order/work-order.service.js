const mongoose = require('mongoose')
const WorkOrderModel = require('./work-order.model')

class WorkOrderService {
  constructor () {}

  list (filter) {
    const whereObj = {}
    const { driver, startDate } = filter

    if (driver) whereObj.driver = new mongoose.Types.ObjectId(driver)
    if (startDate) whereObj.startDate = startDate

    const query = WorkOrderModel.find(whereObj).populate('driver vehicle checkPoints')

    return query.exec()
  }

  create (data) {
    return WorkOrderModel.create(data)
  }

  get (id) {
    return WorkOrderModel.findById(id).populate('driver vehicle checkPoints')
  }

  getBy (filter) {
    return WorkOrderModel.findOne(filter)
  }

  update (id, data) {
    return WorkOrderModel.updateOne({ _id: id }, data)
  }

  delete (id) {
    return WorkOrderModel.deleteOne({ _id: id })
  }
}

module.exports = new WorkOrderService()
