module.exports = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }

  if (err.isJoi) res.status(422).send(err.message)
  else res.status(500).send(err.message || 'Something broke!')
}
