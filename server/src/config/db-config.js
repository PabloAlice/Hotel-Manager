import mongoose from 'mongoose'
import winston from 'winston'

export function setUpDB() {
	mongoose.Promise = global.Promise
	mongoose.connect('mongodb://127.0.0.1:27017/h-manager').catch(err => winston.error(err))
}
