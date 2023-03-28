'use strict'

const jwt = require('jsonwebtoken')
const userService = require('../shared/user.service')
const { validatePassword } = require('../../utils/auth.utils')
const UnauthorizedError = require('../../error/unauthorized.error')
const NotFoundError = require('../../error/not-found.error')
const ServiceUnavailableError = require('../../error/service-unavailable.error')

class AuthController {
  constructor () {}

  async login (req, res, next) {
    try {
      const { app } = req
      const { email, password } = req.body
      const foundOperator = await userService.getBy({ email, type: app })
      if (!foundOperator) {
        throw new NotFoundError(`Operator with email: ${email} not found.`)
      }

      if (!validatePassword(password, foundOperator.password)) throw new UnauthorizedError('Invalid credentials.')

      const token = jwt.sign({ id: foundOperator.id }, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_TTL })

      if (token) res.status(200).json(token)
      else throw new ServiceUnavailableError('Couln\'t generate token, try again later')
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new AuthController()
