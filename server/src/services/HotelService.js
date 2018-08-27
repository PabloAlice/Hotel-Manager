import { Hotel } from '../models/hotel/Hotel'

export async function findHotelById(id) {
	return Hotel.findById(id)
}

export async function findHotels(filters) {
	const { stars, name } = filters
	const filter = {
		...stars && { stars },
		...name && { name },
	}
	return Hotel.find(filter).exec()
}

export async function createHotel(hotelPayload) {
	const hotel = new Hotel(hotelPayload)
	return hotel.save()
}

export async function updateHotel(id, hotelPayload) {
	const options = {
		new: true,
		runValidators: true,
	}
	return Hotel.findByIdAndUpdate(id, hotelPayload, options).exec()
}

export async function deleteHotel(id) {
	return Hotel.findByIdAndRemove(id)
}
