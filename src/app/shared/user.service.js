'use strict'

const userModel = require('./users.model')

class UserService {
  constructor () {}

  list (filter) {
    return userModel.find(filter).populate('vehicle role').populate({ path: 'workOrder', populate: { path: 'checkPoints' } })
  }

  create (data) {
    return userModel.create(data)
  }

  get (id, roleMatch) {
    const query = userModel.findById(id).populate('vehicle').populate({ path: 'workOrder', populate: { path: 'checkPoints' } })
    if (roleMatch) { query.populate({ path: 'role', match: roleMatch }) }

    return query.exec()
  }

  getBy (filter) {
    return userModel.findOne(filter)
  }

  update (found, data) {
    const { address } = data
    if (address) data.address = { ...found.address.toObject(), ...address }
    return userModel.updateOne({ _id: found.id }, { $set: data })
  }

  delete (id) {
    return userModel.deleteOne({ _id: id })
  }
}

module.exports = new UserService()
