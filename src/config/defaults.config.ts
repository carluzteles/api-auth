import * as dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.PORT || 3000
export const MONGODB_URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.eyopcqo.mongodb.net/?retryWrites=true&w=majority`