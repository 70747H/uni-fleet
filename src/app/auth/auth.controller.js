const jwt = require('jsonwebtoken')
const userService = require('../shared/user.service')
const { validatePassword } = require('../../utils/auth.utils')

class AuthController {
  constructor () {}

  async login (req, res, next) {
    try {
      const { app } = req
      const { email, password } = req.body
      const foundOperator = await userService.getBy({ email, type: app })
      if (!foundOperator) {
        throw new Error('Operator not found')
      }

      if (!validatePassword(password, foundOperator.password)) throw new Error('Wrong password')

      const token = jwt.sign({ id: foundOperator.id }, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_TTL })

      if (token) res.status(200).send(token)
      else throw new Error('Couln\'t generate token, try again later')
    } catch (error) {
      console.log('err:: ', error)
      next(error)
    }
  }
}

module.exports = new AuthController()
