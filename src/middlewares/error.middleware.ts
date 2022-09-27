import { NextFunction, Response, Request } from "express";

import { HttpException } from "../utils/HttpException.utils";

export const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
  const status = error.status || 400
  const message = error.message || 'Alguma coisa'

  res.status(status).json({
    message
  })
}