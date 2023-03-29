'use strict'

const httpStatusCodes = require('../constants/httpStatusCodes')
const BaseError = require('./base.error')

class UnauthorizedError extends BaseError {
  constructor (description) {
    super('Unauthorized', httpStatusCodes.UNAUTHORIZED, true, description)
  }
}

module.exports = UnauthorizedError
