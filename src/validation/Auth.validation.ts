import Joi from 'joi'

export const signUpValidationSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    confirmPassword: Joi.string().required(),
    password: Joi.string().required()
})

export const signInValidationSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})