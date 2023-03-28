'use strict'

const roleService = require('./role.service')
const NotFoundError = require('../../error/not-found.error')
const BadRequestError = require('../../error/bad-request.error')

class RoleController {
  constructor () {}

  async list (req, res, next) {
    try {
      const data = await roleService.list()
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create (req, res, next) {
    try {
      const { body } = req
      const { name } = body

      const foundRole = await roleService.getBy({ name })
      if (foundRole) throw new BadRequestError(`Role with same name: ${name} exists`)

      roleService.create(body)

      res.status(201).send()
    } catch (error) {
      next(error)
    }
  }

  async get (req, res, next) {
    try {
      const { params: { id } } = req
      const foundRole = await roleService.get(id)
      if (!foundRole) {
        throw new NotFoundError(`Role with id: ${id} not found.`)
      }
      res.send(foundRole)
    } catch (error) {
      next(error)
    }
  }

  async update (req, res, next) {
    try {
      const { params: { id } } = req
      const { body } = req
      const foundRole = await roleService.get(id)
      if (!foundRole) {
        throw new NotFoundError(`Role with id: ${id} not found.`)
      }
      await roleService.update(foundRole, body)
      res.status(200).send()
    } catch (error) {
      next(error)
    }
  }

  async delete (req, res, next) {
    try {
      const { params: { id } } = req
      const foundRole = await roleService.get(id)
      if (!foundRole) {
        throw new NotFoundError(`Role with id: ${id} not found.`)
      }
      await roleService.delete(id)
      res.status(200).send()
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new RoleController()
