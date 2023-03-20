const Joi = require('joi')

const createSchema = Joi.object({
  name: Joi.string().required(),
  checkPoints: {
    coordinates: Joi.array().items(Joi.array().items(Joi.number()).min(2).max(2).required()).required()
  },
  driver: Joi.string().hex().length(24).required()
}).unknown(false)

const mongoIdSchema = Joi.object({
  id: Joi.string().hex().length(24)
})

const updateSchema = Joi.object({
  name: Joi.string().optional(),
  checkPoints: Joi.array().items(Joi.array().items(Joi.number()).min(2).max(2).required()).optional(),
  driver: Joi.string().hex().length(24).optional()
}).unknown(false)

module.exports = {
  createSchema,
  updateSchema,
  mongoIdSchema
}
