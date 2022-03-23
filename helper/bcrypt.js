const bcrypt = require('bcrypt')

const hasPassword = (password) => {
  return bcrypt.hashSync(password, 10)
}

const comperPassword = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword)
}

module.exports = { hasPassword, comperPassword }