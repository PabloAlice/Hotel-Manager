import mongoose from 'mongoose'

import { handleMongooseHookError } from '../../errors/mongooseHookErrorHandler'

export const hotelSchema = new mongoose.Schema({
	id: { type: String, required: [true, 'id is required'] },
	name: { type: String, required: [true, 'name is required'] },
	stars: { type: Number, required: [true, 'stars is required'] },
	price: { type: Number, required: [true, 'stars is required'] },
	image: { type: String },
	amenities: { type: [String] },
})

hotelSchema.post('find', (err, res, next) => {
	handleMongooseHookError(next, err)
})

hotelSchema.post('findOne', (err, res, next) => {
	handleMongooseHookError(next, err)
})

hotelSchema.post('findOneAndRemove', (err, res, next) => {
	handleMongooseHookError(next, err)
})

hotelSchema.post('findOneAndUpdate', (err, res, next) => {
	handleMongooseHookError(next, err)
})

hotelSchema.post('save', (err, res, next) => {
	handleMongooseHookError(next, err)
})
