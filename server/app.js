import bodyParser from 'body-parser'
import { config } from 'dotenv'
import express from 'express'
import winston from 'winston'

import { setUpLogger } from './src/config/app-config'
import { setUpDB } from './src/config/db-config'
import { errorHandler } from './src/errors/errorHandler'

config()
setUpLogger()
setUpDB()

const app = express()

app.use(bodyParser.json())


app.use(errorHandler)

app.listen(process.env.PORT, winston.info(`hotel-manager server listening on port ${process.env.PORT}`))


