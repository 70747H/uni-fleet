'use strict'

const bcrypt = require('bcrypt')
const NotFoundError = require('../../error/not-found.error')
const BadRequestError = require('../../error/bad-request.error')
const driverService = require('../shared/user.service')
const { USER_TYPES } = require('../../constants/general.constant')

class DriverController {
  constructor () {}

  async list (req, res, next) {
    try {
      const data = await driverService.list({ type: USER_TYPES.DRIVER })
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create (req, res, next) {
    try {
      const { body } = req
      const { email, password } = body

      const foundDriver = await driverService.getBy({ email })
      if (foundDriver) throw new BadRequestError(`Driver with same email: ${email} exists`)

      bcrypt.hash(password, 10).then(function (hash) {
        body.password = hash
        driverService.create(body)
      })

      res.status(201).send()
    } catch (error) {
      next(error)
    }
  }

  async get (req, res, next) {
    try {
      const { params: { id } } = req
      const foundDriver = await driverService.get(id)
      if (!foundDriver) {
        throw new NotFoundError(`Driver with id: ${id} not found.`)
      }
      res.send(foundDriver)
    } catch (error) {
      next(error)
    }
  }

  async update (req, res, next) {
    try {
      const { params: { id } } = req
      const { body } = req
      const foundDriver = await driverService.get(id)
      if (!foundDriver) {
        throw new NotFoundError(`Driver with id: ${id} not found.`)
      }
      await driverService.update(foundDriver, body)
      res.status(200).send()
    } catch (error) {
      next(error)
    }
  }

  async delete (req, res, next) {
    try {
      const { params: { id } } = req
      const foundDriver = await driverService.get(id)
      if (!foundDriver) {
        throw new NotFoundError(`Driver with id: ${id} not found.`)
      }
      await driverService.delete(id)
      res.status(200).send()
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new DriverController()
