'use strict'

const { USER_TYPES } = require('../constants/general.constant')
const ApiKeyInvalidError = require('../error/api-key-invalid.error')
const ApiKeyMissingError = require('../error/api-key-missing.error')

module.exports = (req, res, next) => {
  const { headers } = req
  const apiKey = headers['x-api-key']

  if (!apiKey) return next(new ApiKeyMissingError())

  if (apiKey && apiKey === process.env.DRIVER_API_KEY) req.app = USER_TYPES.DRIVER
  else if (apiKey && apiKey === process.env.OPERATOR_API_KEY) req.app = USER_TYPES.OPERATOR
  else return next(new ApiKeyInvalidError())

  next()
}
