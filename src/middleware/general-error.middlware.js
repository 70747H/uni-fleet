'use strict'

const BaseError = require('../error/base.error')

module.exports = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }

  if (err.isJoi) res.status(422).send(err.message)
  else if (err.name === 'TokenExpiredError') res.status(403).send(err.message)
  else if (err.name === 'JsonWebTokenError') res.status(403).send(err.message)
  else if (err instanceof BaseError) res.status(err.statusCode).send(err.message)
  else res.status(500).send(err.message || 'Something broke!')

  next()
}
