const workOrderPointsService = require('../app/work-order/work-order-points/work-order-points.service')
const trackerService = require('../app/tracking/tracker.service')
module.exports = (io, socket) => {
  const trackDriver = async (data) => {
    const { driver, lat, long } = data
    trackerService.create({ driver, location: { coordinates: [long, lat] } })
    const result = await workOrderPointsService.isNearWorkOrderPoints([data.long, data.lat])
    if (result.length) console.log(`You're ${result[0].distance} away from the nearest point`)
    else console.log('You\'re not followin the check-points')
  }

  socket.on('vehicle:location:update', trackDriver)
}
