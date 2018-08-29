import { HManagerError } from './HManagerError'

export class DBError extends HManagerError {
  constructor() {
    const message = 'There was a problem with the database'
    const userMessage = 'There was a problem processing your request. Try again'
    super('DBError', 500, message, userMessage)
  }
}