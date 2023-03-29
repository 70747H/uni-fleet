'use strict'

const httpStatusCodes = require('../constants/httpStatusCodes')
const BaseError = require('./base.error')

class ForbiddenError extends BaseError {
  constructor (description) {
    super('Forbidden', httpStatusCodes.FORBIDDEN, true, description)
  }
}

module.exports = ForbiddenError
