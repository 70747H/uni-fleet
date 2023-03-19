const Router = require('express').Router
const isAuthenticated = require('../../middleware/authentication.middleware')
const isValidData = require('../../middleware/validation.middleware')
const OperatorController = require('./operator.controller')
const { createSchema, mongoIdSchema, updateSchema } = require('./operator.validation.schema')

const router = new Router()

router.get('', isAuthenticated, OperatorController.list)
router.post('', isAuthenticated, isValidData(createSchema, 'body'), OperatorController.create)
router.get('/:id', isAuthenticated, isValidData(mongoIdSchema, 'params'), OperatorController.get)
router.patch('/:id', isAuthenticated, isValidData(mongoIdSchema, 'params'), isValidData(updateSchema, 'body'), OperatorController.update)
router.delete('/:id', isAuthenticated, isValidData(mongoIdSchema, 'params'), OperatorController.delete)

module.exports = router
