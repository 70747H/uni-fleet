const Router = require('express').Router
const isAuthenticated = require('../../middleware/authentication.middleware')
const isValidData = require('../../middleware/validation.middleware')
const roleController = require('./role.controller')
const { createSchema, mongoIdSchema, updateSchema } = require('./role.schema')

const router = new Router()

router.get('', isAuthenticated, roleController.list)
router.post('', isValidData(createSchema, 'body'), roleController.create)
router.get('/:id', isAuthenticated, isValidData(mongoIdSchema, 'params'), roleController.get)
router.patch('/:id', isAuthenticated, isValidData(mongoIdSchema, 'params'), isValidData(updateSchema, 'body'), roleController.update)
router.delete('/:id', isAuthenticated, isValidData(mongoIdSchema, 'params'), roleController.delete)

module.exports = router
