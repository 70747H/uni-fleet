const vehicleService = require('./vehicle.service')

class VehicleController {
  constructor () {}

  async list (req, res, next) {
    try {
      const data = await vehicleService.list()
      res.send(data)
    } catch (error) {
      console.log('err:: ', error)
      next(error)
    }
  }

  async create (req, res, next) {
    try {
      const { body } = req
      const { vin } = body

      const foundVehicle = await vehicleService.getBy({ vin })
      if (foundVehicle) throw new Error('Vehicle with same vin exists')

      vehicleService.create(body)

      res.status(201).send()
    } catch (error) {
      console.log('err:: ', error.message)
      next(error)
    }
  }

  async get (req, res, next) {
    try {
      const { params: { id } } = req
      const foundVehicle = await vehicleService.get(id)
      if (!foundVehicle) {
        throw new Error('Vehicle not found')
      }
      res.send(foundVehicle)
    } catch (error) {
      console.log('err:: ', error)
      next(error)
    }
  }

  async update (req, res, next) {
    try {
      const { params: { id } } = req
      const { body } = req
      const foundVehicle = await vehicleService.get(id)
      if (!foundVehicle) {
        throw new Error('Vehicle not found')
      }
      await vehicleService.update(id, body)
      res.status(200).send()
    } catch (error) {
      console.log('err:: ', error)
      next(error)
    }
  }

  async delete (req, res, next) {
    try {
      const { params: { id } } = req
      const foundVehicle = await vehicleService.get(id)
      if (!foundVehicle) {
        throw new Error('Vehicle not found')
      }
      await vehicleService.delete(id)
      res.status(200).send()
    } catch (error) {
      console.log('err:: ', error)
      next(error)
    }
  }
}

module.exports = new VehicleController()
