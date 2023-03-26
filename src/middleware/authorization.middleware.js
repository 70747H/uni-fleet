const roleService = require("../app/role/role.service")
const userService = require("../app/shared/user.service")

module.exports = async(req, res, next) => {
  const { user, method, baseUrl, route } = req

  if(!user) next(new Error('Forbidden'))

  const foundUser = await userService.get(user)
  if(!foundUser) next(new Error('User not found'))

  const { role } = foundUser
  const foundRole = await roleService.get(role)
  if(!foundRole) next(new Error('Role not found'))

  const { permissions } = foundRole
  const constructedRoute = `${method}_${baseUrl.substring(1, baseUrl.length)}${route.path}`
  const foundMatchingPermission = permissions.filter(permission => permission === constructedRoute)
  if(!foundMatchingPermission) next(new Error('User not permitted'))

  req.role = role
  next()
}
