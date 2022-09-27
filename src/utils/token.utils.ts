import jwt from 'jsonwebtoken'

import { SECRET_WORD } from '../config/defaults.config'

export const createToken = (_id: string) =>  jwt.sign(_id, SECRET_WORD)