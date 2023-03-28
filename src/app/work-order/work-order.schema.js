'use strict'

const Joi = require('joi')

const listSchema = Joi.object({
  driver: Joi.string().hex().length(24).optional(),
  startDate: Joi.string().optional(),
  populate: Joi.array().items(Joi.string()).min(1).optional()
})

const createSchema = Joi.object({
  name: Joi.string().required(),
  checkPoints: Joi.array().items(Joi.array().items(Joi.number()).min(2).max(2)).min(1).required(),
  driver: Joi.string().hex().length(24).required(),
  vehicle: Joi.string().hex().length(24).required(),
  startDate: Joi.string().required()
}).unknown(false)

const mongoIdSchema = Joi.object({
  id: Joi.string().hex().length(24)
})

const updateSchema = Joi.object({
  name: Joi.string().optional(),
  driver: Joi.string().hex().length(24).optional(),
  vehicle: Joi.string().hex().length(24).optional(),
  startDate: Joi.string().optional(),
  startedOn: Joi.date().iso().optional(),
  endedOn: Joi.date().iso().optional(),
  status: Joi.string().valid('started', 'ended', 'idle').optional()
}).unknown(false)

module.exports = {
  listSchema,
  createSchema,
  updateSchema,
  mongoIdSchema
}
