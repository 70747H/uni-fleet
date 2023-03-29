'use strict'

require('dotenv').config()
const mongoose = require('mongoose')
const Role = require('../app/role/role.model')
const User = require('../app/shared/users.model')
const Vehicle = require('../app/vehicle/vehicle.model')
const WorkOrder = require('../app/work-order/work-order.model')
const Workorderpoints = require('../app/work-order/work-order-points/work-order-points.model')

const { roles, users, vehicles, workorders, workorderpoints } = require('./data')

mongoose.connect(process.env.MONGO_DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('db connected'))
  .catch(err => console.log('seed:connection: ', err))
mongoose.set('debug', true)

const seedDB = async () => {
  await Promise.all([
    Role.deleteMany(),
    User.deleteMany(),
    Vehicle.deleteMany(),
    WorkOrder.deleteMany(),
    Workorderpoints.deleteMany()
  ])
  await Promise.all([
    Role.insertMany(roles),
    User.insertMany(users),
    Vehicle.insertMany(vehicles),
    WorkOrder.insertMany(workorders),
    Workorderpoints.insertMany(workorderpoints)
  ])
}

seedDB()
  .then(() => mongoose.connection.close())
  .catch(err => console.log('seed:connection:close: ', err))
