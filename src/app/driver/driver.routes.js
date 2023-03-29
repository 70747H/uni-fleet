'use strict'

const Router = require('express').Router
const isAuthenticated = require('../../middleware/authentication.middleware')
const isAuthorized = require('../../middleware/authorization.middleware')
const isValidData = require('../../middleware/validation.middleware')
const DriverController = require('./driver.controller')
const { createSchema, mongoIdSchema, updateSchema } = require('./driver.validation.schema')

const router = new Router()

router.get('', isAuthenticated, isAuthorized('GET_driver'), DriverController.list)
router.post('', isAuthenticated, isAuthorized('POST_driver'), isValidData(createSchema, 'body'), DriverController.create)
router.get('/:id', isAuthenticated, isAuthorized('GET_driver/:id'), isValidData(mongoIdSchema, 'params'), DriverController.get)
router.patch('/:id', isAuthenticated, isAuthorized('PATCH_driver/:id'), isValidData(mongoIdSchema, 'params'), isValidData(updateSchema, 'body'), DriverController.update)
router.delete('/:id', isAuthenticated, isAuthorized('DELETE_driver/:id'), isValidData(mongoIdSchema, 'params'), DriverController.delete)

module.exports = router
