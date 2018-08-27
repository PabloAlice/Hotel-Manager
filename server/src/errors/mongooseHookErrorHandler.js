import winston from 'winston/lib/winston'
import ValidationError from 'mongoose/lib/error/validation'
import * as errors from '.'

const errorsWithValidation = { ...errors, ValidationError }

export function handleMongooseHookError(next, err) {
	winston.error(err)
	const newError = errorsWithValidation.hasOwnProperty(err.name) ? err : new errors.DBError()
	next(newError)
}
