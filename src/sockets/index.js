'use strict'

const { Server } = require('socket.io')
// const { setupWorker } = require('@socket.io/sticky')
// const { createAdapter } = require('@socket.io/cluster-adapter')
const registerTrackingHandlers = require('./tracking.handler')

module.exports = function ws (httpServer) {
  const io = new Server(httpServer, { cors: true, origins: '*' })

  // io.adapter(createAdapter())
  // setupWorker(io)

  const onConnection = (socket) => {
    registerTrackingHandlers(io, socket)
  }

  io.on('connection', onConnection)

  return io
}
