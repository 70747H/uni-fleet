const Joi = require('joi')

const createSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(5).required(),
  type: Joi.string().default('operator')
}).unknown(false)

const mongoIdSchema = Joi.object({
  id: Joi.string().hex().length(24)
})

const updateSchema = Joi.object({
  name: Joi.string().optional(),
  email: Joi.string().email().lowercase().optional()
}).unknown(false)

module.exports = {
  createSchema,
  mongoIdSchema,
  updateSchema
}
