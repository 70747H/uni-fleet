'use strict'

const userModel = require('./users.model')

class UserService {
  constructor () {}

  list (filter) {
    return userModel.find({ type: 'operator' }).populate('vehicle role').populate({ path: 'workOrder', populate: { path: 'checkPoints' } })
  }

  create (data) {
    return userModel.create(data)
  }

  get (id) {
    return userModel.findById(id).populate('vehicle role').populate({ path: 'workOrder', populate: { path: 'checkPoints' } })
  }

  getBy (filter) {
    return userModel.findOne(filter)
  }

  update (found, data) {
    const { address } = data
    if (address) data.address = { ...address, ...found.address }
    return userModel.updateOne({ _id: found.id }, { $set: data })
  }

  delete (id) {
    return userModel.deleteOne({ _id: id })
  }
}

module.exports = new UserService()
