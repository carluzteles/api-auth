import { NextFunction, Request, Response } from "express";

import { Schema } from 'joi'
import HttpException from "../utils/HttpException.utils";

export const validationMiddleware = (schema: Schema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const value = await schema.validateAsync(req.body)

        req.body = value

        next()
    }
    catch (err: any) {
        next(new HttpException(400, err.details[0].message))
    }
}