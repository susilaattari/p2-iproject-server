const jwt = require('jsonwebtoken')


//bikin token dulu di payload
const generateToken = (payload) => {
  return jwt.sign(payload, process.env.SECRET_KEY)
}

//baca payload dari Token
const verifyToken = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY)
}
module.exports = { generateToken, verifyToken }