import { Response, Request, NextFunction } from "express";

import HttpException from "../utils/HttpException.utils";

export const errorMiddleware = (err: HttpException, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 400
    const message = err.message || 'Alguma coisa deu errado'

    res.status(status).json({
        message: message
    })
} 