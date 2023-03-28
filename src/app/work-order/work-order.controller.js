'use strict'

const workOrderService = require('./work-order.service')
const workOrderPointsService = require('./work-order-points/work-order-points.service')
const NotFoundError = require('../../error/not-found.error')

class WorkOrderController {
  constructor () {}

  async list (req, res, next) {
    try {
      const { query } = req
      const data = await workOrderService.list(query)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create (req, res, next) {
    try {
      const { body } = req
      const { checkPoints, ...rest } = body
      const createdWorkOrder = await workOrderService.create(rest)
      const createdPoints = await workOrderPointsService.bulkCreate(createdWorkOrder, checkPoints)
      await workOrderService.update(createdWorkOrder.id, { checkPoints: createdPoints })
      res.status(201).send()
    } catch (error) {
      next(error)
    }
  }

  async get (req, res, next) {
    try {
      const { params: { id } } = req
      const foundWorkOrder = await workOrderService.get(id)
      if (!foundWorkOrder) {
        throw new NotFoundError(`WorkOrder with id: ${id} not found`)
      }
      res.send(foundWorkOrder)
    } catch (error) {
      next(error)
    }
  }

  async update (req, res, next) {
    try {
      const { params: { id } } = req
      const { body } = req
      const foundWorkOrder = await workOrderService.get(id)
      if (!foundWorkOrder) {
        throw NotFoundError(`WorkOrder with id: ${id} not found`)
      }
      await workOrderService.update(foundWorkOrder.id, body)

      res.status(200).send()
    } catch (error) {
      next(error)
    }
  }

  async delete (req, res, next) {
    try {
      const { params: { id } } = req
      const foundWorkOrder = await workOrderService.get(id)
      if (!foundWorkOrder) {
        throw new NotFoundError(`WorkOrder with id: ${id} not found`)
      }
      await workOrderService.delete(id)
      res.status(200).send()
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new WorkOrderController()
