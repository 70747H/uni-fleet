'use strict'

const jwt = require('jsonwebtoken')
const UnauthorizedError = require('../error/unauthorized.error')
const ForbiddenError = require('../error/forbidden.error')

module.exports = (req, res, next) => {
  try {
    const { headers } = req
    const authHeader = headers.authorization

    if (!authHeader) return next(new ForbiddenError())
    const token = authHeader.split(' ')[1]
    if (!token) return next(new UnauthorizedError())

    const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
    req.user = decoded.id
    next()
  } catch (err) {
    next(err)
  }
}
