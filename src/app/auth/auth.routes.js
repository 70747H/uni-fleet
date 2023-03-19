const Router = require('express').Router
const isValidData = require('../../middleware/validation.middleware')
const checkApiKey = require('../../middleware/api-key.middleware')
const { loginSchema } = require('./auth.validation.schema')
const authController = require('./auth.controller')

const router = new Router()

router.post('/login', checkApiKey, isValidData(loginSchema, 'body'), authController.login)

module.exports = router
