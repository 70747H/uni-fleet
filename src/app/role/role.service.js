const RoleModel = require('./role.model')

class RoleService {
  constructor () {}

  list () {
    return RoleModel.find()
  }

  create (data) {
    return RoleModel.create(data)
  }

  get (id) {
    return RoleModel.findById(id)
  }

  getBy (filter) {
    return RoleModel.findOne(filter)
  }

  update (id, data) {
    return RoleModel.updateOne({ _id: id }, data)
  }

  delete (id) {
    return RoleModel.deleteOne({ _id: id })
  }
}

module.exports = new RoleService()
