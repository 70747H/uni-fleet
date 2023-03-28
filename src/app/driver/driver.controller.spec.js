'use strict'

const controller = require('./driver.controller')
const service = require('../shared/user.service')

const req = jest.fn()
const res = { sendStatus: jest.fn() }
const next = jest.fn()

describe('driver controller', () => {
  describe('list', () => {
    it('should call service.list', async () => {
      jest.spyOn(service, 'list').mockImplementation(() => Promise.resolve([]))
      await controller.list(req, res, next)
      expect(service.list).toHaveBeenCalledTimes(1)
    })
  })
})
