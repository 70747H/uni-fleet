'use strict'

const httpStatusCodes = require('../constants/httpStatusCodes')
const BaseError = require('./base.error')

class ApiKeyMissingError extends BaseError {
  constructor (description) {
    super('Unauthorized', httpStatusCodes.BAD_REQUEST, true, description || 'API key is missing')
  }
}

module.exports = ApiKeyMissingError
