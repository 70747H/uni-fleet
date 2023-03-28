'use strict'

require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const authRouter = require('./app/auth/auth.routes')
const driverRouter = require('./app/driver/driver.routes')
const vehicleRouter = require('./app/vehicle/vehicle.routes')
const operatorRouter = require('./app/operator/operator.routes')
const workOrderRouter = require('./app/work-order/work-order.routes')
const roleRouter = require('./app/role/role.routes')
const generalErrorMiddleware = require('./middleware/general-error.middlware')
const mongooseErrorMiddleware = require('./middleware/mongoose-error.middleware')

const app = express()

app.use(helmet())
app.disable('x-powered-by')
app.use(cors({ origin: '*' }))
app.use(morgan('tiny'))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true, limit: '100kb', parameterLimit: 10 }))

require('./db.config')

app.use('/auth', authRouter)
app.use('/driver', driverRouter)
app.use('/vehicle', vehicleRouter)
app.use('/operator', operatorRouter)
app.use('/work-order', workOrderRouter)
app.use('/role', roleRouter)

app.use(mongooseErrorMiddleware)
app.use(generalErrorMiddleware)

module.exports = app
