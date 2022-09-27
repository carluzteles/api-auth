import bcrypt from 'bcrypt'

import UserModel from "../models/User.model"
import CustomError from "../utils/CustomError.utils"
import { createToken } from "../utils/token.utils"

class AuthService {
    public async signup(username: string, email: string, password: string) {
        try {
            const userAlreadyExists = await this.getUser(email)

            if (userAlreadyExists) {
                throw new CustomError('User already exists')
            }

            const encryptedPassword = await bcrypt.hash(password, 10)

            const user = await UserModel.create({ username, password: encryptedPassword, email })

            const token = createToken(user.id)

            return ({ user: { username: user.username, email: user.email }, token: token })
        } catch (err) {
            const errMessage = err instanceof CustomError ? err.message : 'Cannot create user'
            throw new Error(errMessage)
        }
    }

    public async signin(email: string, password: string) {
        try {
            const user = await this.getUser(email)

            if (!user) {
                throw new CustomError('Cannot find user')
            }

            const match = await bcrypt.compare(password, user.password)

            if (!match) {
                throw new CustomError('Password wrong')
            }

            const token = createToken(user.id)

            return ({ user: { username: user.username, email: user.email }, token: token })
        } catch (err) {
            console.log(err)
            const errMessage = err instanceof CustomError ? err.message : 'Cannot login'
            throw new Error(errMessage)
        }
    }

    private async getUser(email: string) {
        const user = await UserModel.findOne({ email })

        return user
    }
}

export default AuthService