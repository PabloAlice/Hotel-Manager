import { Router } from 'express'

import { ResourceNotFoundError } from '../errors'
import * as HotelService from '../services/HotelService'
import { wrap } from '../utils/requestHandlerWrapper'

export const HotelController = Router()

/**
 * Find Hotel by id
 */
HotelController.get('/:id', wrap(async (req, res) => {
	const hotel = await HotelService.findHotelById(req.params.id)
	if (!hotel) {
		throw new ResourceNotFoundError()
	}
	return res.status(200).json({ hotel })
}))

/**
 * Find all hotels
 */
HotelController.get('/', wrap(async (req, res) => {
  const { stars, name } = req.query
	const parsedStars = stars && JSON.parse(stars)
	const hotels = await HotelService.findHotels({stars: parsedStars, name})
	return res.status(200).json({ hotels })
}))

/**
 * Create hotel
 */
HotelController.post('/', wrap(async (req, res) => {
	await HotelService.createHotel(req.body.hotel)
	return res.sendStatus(200)
}))

/**
 * Update hotel by id
 */
HotelController.post('/:id', wrap(async (req, res) => {
	const hotel = await HotelService.updateHotel(req.params.id, req.body.hotel)
	if (!hotel) {
		throw new ResourceNotFoundError()
	}
	return res.status(200).json({ hotel })
}))

/**
 * Delete hotel by id
 */
HotelController.delete('/:id', wrap(async (req, res) => {
	const hotel = await HotelService.deleteHotel(req.params.id)
	if (!hotel) {
		throw new ResourceNotFoundError()
	}
	return res.sendStatus(200)
}))
