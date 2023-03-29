'use strict'

const userService = require('../app/shared/user.service')
const ForbiddenError = require('../error/forbidden.error')
const NotFoundError = require('../error/not-found.error')

module.exports = (requirdPermission) => {
  return async (req, res, next) => {
    const { user } = req

    if (!user) next(new ForbiddenError())

    const foundUser = await userService.get(user, { permissions: requirdPermission })
    if (!foundUser) next(new NotFoundError('User not found'))
    if (!foundUser.role) next(new ForbiddenError('User not permitted'))

    next()
  }
}
