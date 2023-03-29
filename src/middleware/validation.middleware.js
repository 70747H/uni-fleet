'use strict'

module.exports = (schema, dataPart) => {
  return async (req, res, next) => {
    try {
      const validated = await schema.validateAsync(req[`${dataPart}`])
      req[`${dataPart}`] = validated
      next()
    } catch (err) {
      next(err)
    }
  }
}
