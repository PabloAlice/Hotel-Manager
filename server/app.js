import bodyParser from 'body-parser'
import { config } from 'dotenv'
import express from 'express'
import winston from 'winston'

import { setUpLogger } from './src/config/app-config'
import { setUpDB } from './src/config/db-config'
import { HotelController } from './src/controllers/HotelController'
import { endpoints } from './src/constants/endpoints'
import { errorHandler } from './src/errors/errorHandler'

config()
setUpLogger()
setUpDB()

const PORT = process.env.PORT
const app = express()

app.use(bodyParser.json())

app.use(endpoints.hotels, HotelController)

app.use(errorHandler)
app.listen(PORT, winston.info(`hotel-manager server listening on port ${PORT}`))
