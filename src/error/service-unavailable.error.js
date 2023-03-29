'use strict'

const httpStatusCodes = require('../constants/httpStatusCodes')
const BaseError = require('./base.error')

class ServiceUnavailableError extends BaseError {
  constructor (description) {
    super('Service Unavailable', httpStatusCodes.SERVICE_UNAVAILABLE, true, description)
  }
}

module.exports = ServiceUnavailableError
