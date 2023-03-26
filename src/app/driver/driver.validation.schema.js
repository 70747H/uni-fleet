const Joi = require('joi')

const createSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(5).required(),
  age: Joi.number().required(),
  mobile: Joi.string().required(),
  address: Joi.object({
    lat: Joi.number().required(),
    long: Joi.number().required()
  }).required(),
  type: Joi.string().default('driver'),
  vehicle: Joi.string().hex().length(24).optional(),
  role: Joi.string().hex().length(24).optional()
}).unknown(false)

const mongoIdSchema = Joi.object({
  id: Joi.string().hex().length(24)
})

const updateSchema = Joi.object({
  name: Joi.string().optional(),
  email: Joi.string().email().lowercase().optional(),
  age: Joi.number().optional(),
  mobile: Joi.string().optional(),
  address: Joi.object({
    lat: Joi.number().optional(),
    long: Joi.number().optional()
  }).optional(),
  vehicle: Joi.string().hex().length(24).optional(),
  role: Joi.string().hex().length(24).optional()
}).unknown(false)

module.exports = {
  createSchema,
  mongoIdSchema,
  updateSchema
}
