import * as dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.PORT || 3000
<<<<<<< HEAD

export const MONGODB_PORT = process.env.MONGODB_PORT

export const MONGODB_DATABASE = process.env.MONGODB_DATABASE

export const MONGODB_CONNSTRING = process.env.MONGODB_CONNSTRING as string

export const SECRET_WORD = process.env.SECRET_WORD as string
=======
export const MONGODB_URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.eyopcqo.mongodb.net/?retryWrites=true&w=majority`
>>>>>>> 70aec13286822e409842793735c1daa7e79189c2
