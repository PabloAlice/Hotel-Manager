import winston from 'winston'

export function setUpLogger() {
	winston.add(winston.transports.File, { filename: 'logs/h-manager-server.log', level: 'debug' })
}
