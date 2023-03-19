const Router = require('express').Router
const isAuthenticated = require('../../middleware/authentication.middleware')
const isValidData = require('../../middleware/validation.middleware')
const DriverController = require('./driver.controller')
const { createSchema, mongoIdSchema, updateSchema } = require('./driver.validation.schema')

const router = new Router()

router.get('', isAuthenticated, DriverController.list)
router.post('', isValidData(createSchema, 'body'), DriverController.create)
router.get('/:id', isAuthenticated, isValidData(mongoIdSchema, 'params'), DriverController.get)
router.patch('/:id', isAuthenticated, isValidData(mongoIdSchema, 'params'), isValidData(updateSchema, 'body'), DriverController.update)
router.delete('/:id', isAuthenticated, isValidData(mongoIdSchema, 'params'), DriverController.delete)

module.exports = router
