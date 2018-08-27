import mongoose from 'mongoose'

import { hotelSchema } from './hotelSchema'

class HotelModel extends mongoose.Model {
	constructor(hotel = {}) {
		super(hotel)
		this.id = hotel.id
		this.image = hotel.image
		this.name = hotel.name
		this.stars = hotel.stars
		this.price = hotel.price
		this.amenities = hotel.amenities
	}
}

export const Hotel = mongoose.model(HotelModel, hotelSchema, 'hotels')
