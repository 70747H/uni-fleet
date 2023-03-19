const bcrypt = require('bcrypt')
const driverService = require('../shared/user.service')

class DriverController {
  constructor () {}

  async list (req, res, next) {
    try {
      const data = await driverService.list()
      res.send(data)
    } catch (error) {
      console.log('err:: ', error)
      next(error)
    }
  }

  async create (req, res, next) {
    try {
      const { body } = req
      const { email, password } = body

      const foundDriver = await driverService.getBy({ email })
      if (foundDriver) throw new Error('Driver with same email exists')

      bcrypt.hash(password, 10).then(function (hash) {
        body.password = hash
        driverService.create(body)
      })

      res.status(201).send()
    } catch (error) {
      console.log('err:: ', error.message)
      next(error)
    }
  }

  async get (req, res, next) {
    try {
      const { params: { id } } = req
      const foundDriver = await driverService.get(id)
      if (!foundDriver) {
        throw new Error('Driver not found')
      }
      res.send(foundDriver)
    } catch (error) {
      console.log('err:: ', error)
      next(error)
    }
  }

  async update (req, res, next) {
    try {
      const { params: { id } } = req
      const { body } = req
      const foundDriver = await driverService.get(id)
      if (!foundDriver) {
        throw new Error('Driver not found')
      }
      await driverService.update(foundDriver, body)
      res.status(200).send()
    } catch (error) {
      console.log('err:: ', error)
      next(error)
    }
  }

  async delete (req, res, next) {
    try {
      const { params: { id } } = req
      const foundDriver = await driverService.get(id)
      if (!foundDriver) {
        throw new Error('Driver not found')
      }
      await driverService.delete(id)
      res.status(200).send()
    } catch (error) {
      console.log('err:: ', error)
      next(error)
    }
  }
}

module.exports = new DriverController()
