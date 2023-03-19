const bcrypt = require('bcrypt')
const operatorService = require('../shared/user.service')

class OperatorController {
  constructor () {}

  async list (req, res, next) {
    try {
      const data = await operatorService.list()
      res.send(data)
    } catch (error) {
      console.log('err:: ', error)
      next(error)
    }
  }

  async create (req, res, next) {
    try {
      const { body } = req
      const { email, password } = body

      const foundOperator = await operatorService.getBy({ email })
      if (foundOperator) throw new Error('Operator with same email exists')

      bcrypt.hash(password, 10).then(function (hash) {
        body.password = hash
        operatorService.create(body)
      })

      res.status(201).send()
    } catch (error) {
      console.log('err:: ', error.message)
      next(error)
    }
  }

  async get (req, res, next) {
    try {
      const { params: { id } } = req
      const foundOperator = await operatorService.get(id)
      if (!foundOperator) {
        throw new Error('Operator not found')
      }
      res.send(foundOperator)
    } catch (error) {
      console.log('err:: ', error)
      next(error)
    }
  }

  async update (req, res, next) {
    try {
      const { params: { id } } = req
      const { body } = req
      const foundOperator = await operatorService.get(id)
      if (!foundOperator) {
        throw new Error('Operator not found')
      }
      await operatorService.update(foundOperator, body)
      res.status(200).send()
    } catch (error) {
      console.log('err:: ', error)
      next(error)
    }
  }

  async delete (req, res, next) {
    try {
      const { params: { id } } = req
      const foundOperator = await operatorService.get(id)
      if (!foundOperator) {
        throw new Error('Operator not found')
      }
      await operatorService.delete(id)
      res.status(200).send()
    } catch (error) {
      console.log('err:: ', error)
      next(error)
    }
  }
}

module.exports = new OperatorController()
