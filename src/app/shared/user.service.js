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
    const { address, ...rest } = data
    Object.assign(found, rest)
    if (address) found.address = data.address ? Object.assign(found.address, data.address) : found.address
    return found.save()
  }

  delete (id) {
    return userModel.deleteOne({ _id: id })
  }
}

module.exports = new UserService()
