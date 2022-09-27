import * as dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.PORT || 3000

export const MONGODB_PORT = process.env.MONGODB_PORT

export const MONGODB_DATABASE = process.env.MONGODB_DATABASE

export const MONGODB_CONNSTRING = process.env.MONGODB_CONNSTRING as string

export const SECRET_WORD = process.env.SECRET_WORD as string
