const Router = require('express').Router
const isAuthenticated = require('../../middleware/authentication.middleware')
const isValidData = require('../../middleware/validation.middleware')
const WorkOrderController = require('./work-order.controller')
const { listSchema, createSchema, updateSchema, mongoIdSchema } = require('./work-order.schema')

const router = new Router()

router.get('', isAuthenticated, isValidData(listSchema, 'query'), WorkOrderController.list)
router.post('', isAuthenticated, isValidData(createSchema, 'body'), WorkOrderController.create)
router.get('/:id', isAuthenticated, isValidData(mongoIdSchema, 'params'), WorkOrderController.get)
router.patch('/:id', isAuthenticated, isValidData(mongoIdSchema, 'params'), isValidData(updateSchema, 'body'), WorkOrderController.update)
router.delete('/:id', isAuthenticated, isValidData(mongoIdSchema, 'params'), WorkOrderController.delete)

module.exports = router
