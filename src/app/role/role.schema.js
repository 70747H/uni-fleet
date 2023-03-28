'use strict'

const Joi = require('joi')

const createSchema = Joi.object({
  name: Joi.string().required(),
  permissions: Joi.array().items(Joi.string().not().empty().trim()).min(1)
}).unknown(false)

const mongoIdSchema = Joi.object({
  id: Joi.string().hex().length(24)
})

const updateSchema = Joi.object({
  name: Joi.string().optional(),
  permissions: Joi.array().items(Joi.string().not().empty().trim()).min(1)
}).unknown(false)

module.exports = {
  createSchema,
  mongoIdSchema,
  updateSchema
}
