import mongoose from 'mongoose'
import winston from 'winston'
import data from './data.json'
import * as HotelService from '../src/services/HotelService'

(async function feed() {
	await mongoose.connect('mongodb://127.0.0.1:27017/h-manager')
	return Promise.all(data.map(hotel => HotelService.createHotel(hotel)))
}()).then(() => {
	mongoose.connection.close()
	winston.info('Feeded!')
})
