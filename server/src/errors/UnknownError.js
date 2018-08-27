import { HManagerError } from './HManagerError'

export class UnknownError extends HManagerError {
	constructor(message, name = 'UnknownError') {
		const userMessage = 'There was a problem processing your request. Try again'
		super(name, 500, message, userMessage)
	}
}
