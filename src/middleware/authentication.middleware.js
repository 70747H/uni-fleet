const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const { headers } = req
  const authHeader = headers.authorization

  if (!authHeader) return res.sendStatus(403)

  const token = authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    console.log(err)

    if (err) return res.sendStatus(403)

    req.user = user

    next()
  })
}
