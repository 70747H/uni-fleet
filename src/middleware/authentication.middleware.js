const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  try {
    const { headers } = req
    const authHeader = headers.authorization

    if (!authHeader) return res.sendStatus(403)
    const token = authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    let decoded = jwt.verify(token, process.env.TOKEN_SECRET)
    req.user = decoded
    next()
  } catch (err) {
    next(err)
  }
}
