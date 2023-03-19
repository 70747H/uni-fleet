const Joi = require('joi')

const createSchema = Joi.object({
  year: Joi.number().required(),
  make: Joi.string().required(),
  model: Joi.string(),
  type: Joi.string().required(),
  color: Joi.string().required(),
  fuelType: Joi.string().required(),
  vin: Joi.string().required(),
  license: Joi.string().required()
}).unknown(false)

const mongoIdSchema = Joi.object({
  id: Joi.string().hex().length(24)
})

const updateSchema = Joi.object({
  year: Joi.number().optional(),
  make: Joi.string().optional(),
  model: Joi.string(),
  type: Joi.string().optional(),
  color: Joi.string().optional(),
  fuelType: Joi.string().optional(),
  vin: Joi.string().optional(),
  license: Joi.string().optional()
}).unknown(false)

module.exports = {
  createSchema,
  mongoIdSchema,
  updateSchema
}
