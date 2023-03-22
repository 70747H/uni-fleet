const { Server } = require('socket.io')
const registerTrackingHandlers = require('./tracking.handler')

module.exports = function ws (httpServer) {
  const io = new Server(httpServer, { cors: true, origins: '*' })

  const onConnection = (socket) => {
    registerTrackingHandlers(io, socket)
  }

  io.on('connection', onConnection)

  return io
}
