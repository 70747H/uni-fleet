const userModel = require('./users.model')

class UserService {
  constructor () {}

  list () {
    return userModel.find()
  }

  create (data) {
    return userModel.create(data)
  }

  get (id) {
    return userModel.findById(id)
  }

  getBy (filter) {
    return userModel.findOne(filter)
  }

  update (found, data) {
    const { address } = data
    // Object.assign(found, rest)
    // if (address) found.address = data.address ? Object.assign(found.address, data.address) : found.address
    // return found.save()

    // const { address, ...rest } = data
    // const updateObject = { ...rest }
    // if (address) {
    //   if (address.lat) updateObject['$set'] = { 'address.lat': address.lat }
    //   if (address.long) updateObject['$set'] = { 'address.long': address.long }
    // }
    if (address) data.address = { ...address, ...found.address }
    return userModel.updateOne({ _id: found.id }, { $set: data })
  }

  delete (id) {
    return userModel.deleteOne({ _id: id })
  }
}

module.exports = new UserService()
