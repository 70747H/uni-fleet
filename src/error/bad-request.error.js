const httpStatusCodes = require('./httpStatusCodes')
const BaseError = require('./base.error')

class BadRequestError extends BaseError {
  constructor (description) {
    super('Unauthorized', httpStatusCodes.BAD_REQUEST, true, description)
  }
}

module.exports = BadRequestError
