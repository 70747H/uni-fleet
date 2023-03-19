const workOrderService = require('./work-order.service')

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

  create (req, res, next) {
    try {
      const { body } = req
      res.send(workOrderService.create(body))
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
