'use strict'

const httpStatusCodes = require('../constants/httpStatusCodes')
const BaseError = require('./base.error')

class ApiKeyInvalidError extends BaseError {
  constructor (description) {
    super('Unauthorized', httpStatusCodes.FORBIDDEN, true, description || 'API key is unauthorized')
  }
}

module.exports = ApiKeyInvalidError
