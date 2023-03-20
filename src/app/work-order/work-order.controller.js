const db = require('../../db.config')
const workOrderService = require('./work-order.service')
const workOrderPointsService = require('./work-order-points/work-order-points.service')

class WorkOrderController {
  constructor () {}

  async list (req, res, next) {
    try {
      const data = await workOrderService.list()
      res.send(data)
    } catch (error) {
      console.log('err:: ', error)
      next(error)
    }
  }

  async create (req, res, next) {
    try {
      const { body } = req
      const { checkPoints, ...rest } = body
      const createdWorkOrder = await workOrderService.create(rest)
      await workOrderPointsService.bulkCreate(createdWorkOrder.id, rest.driver, checkPoints)
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
        throw new Error('WorkOrder not found')
      }
      res.send(foundWorkOrder)
    } catch (error) {
      console.log('err:: ', error)
      next(error)
    }
  }

  async update (req, res, next) {
    try {
      const { params: { id } } = req
      const { body } = req
      const foundWorkOrder = await workOrderService.get(id)
      if (!foundWorkOrder) {
        throw new Error('WorkOrder not found')
      }
      await workOrderService.update(foundWorkOrder, body)
      res.status(200).send()
    } catch (error) {
      console.log('err:: ', error)
      next(error)
    }
  }

  async delete (req, res, next) {
    try {
      const { params: { id } } = req
      const foundWorkOrder = await workOrderService.get(id)
      if (!foundWorkOrder) {
        throw new Error('WorkOrder not found')
      }
      await workOrderService.delete(id)
      res.status(200).send()
    } catch (error) {
      console.log('err:: ', error)
      next(error)
    }
  }
}

module.exports = new WorkOrderController()
