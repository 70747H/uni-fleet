'use strict'

const bcrypt = require('bcrypt')

const validatePassword = (providedPassword, actualPassword) => {
  return bcrypt.compareSync(providedPassword, actualPassword)
}

module.exports = {
  validatePassword
}
