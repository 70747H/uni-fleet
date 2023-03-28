'use strict'

const Router = require('express').Router
const isAuthenticated = require('../../middleware/authentication.middleware')
const isValidData = require('../../middleware/validation.middleware')
const VehicleController = require('./vehicle.controller')
const { createSchema, mongoIdSchema, updateSchema } = require('./vehicle.validation.schema')

const router = new Router()

router.get('', isAuthenticated, VehicleController.list)
router.post('', isAuthenticated, isValidData(createSchema, 'body'), VehicleController.create)
router.get('/:id', isAuthenticated, isValidData(mongoIdSchema, 'params'), VehicleController.get)
router.patch('/:id', isAuthenticated, isValidData(mongoIdSchema, 'params'), isValidData(updateSchema, 'body'), VehicleController.update)
router.delete('/:id', isAuthenticated, isValidData(mongoIdSchema, 'params'), VehicleController.delete)

module.exports = router
