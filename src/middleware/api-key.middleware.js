module.exports = (req, res, next) => {
  const { headers } = req
  const apiKey = headers['x-api-key']

  if (!apiKey) next(new Error('No api-key provided'))

  if (apiKey && apiKey === process.env.DRIVER_API_KEY) req.app = 'driver'
  else if (apiKey && apiKey === process.env.OPERATOR_API_KEY) req.app = 'operator'
  else next(new Error('Invalid api-key provided'))

  next()
}
