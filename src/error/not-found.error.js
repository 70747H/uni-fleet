'use strict'

const httpStatusCodes = require('../constants/httpStatusCodes')
const BaseError = require('./base.error')

class NotFoundError extends BaseError {
  constructor (description) {
    super('Not Found', httpStatusCodes.NOT_FOUND, true, description)
  }
}

module.exports = NotFoundError
