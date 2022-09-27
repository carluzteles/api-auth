<<<<<<< HEAD
import { Controller } from "../interfaces/controller.interface";

import { NextFunction, Request, Response, Router } from "express";

import AuthService from "../services/Auth.service";
import HttpException from "../utils/HttpException.utils";

import { validationMiddleware } from "../middlewares/validation.middleware";

import { signInValidationSchema, signUpValidationSchema } from "../validation/Auth.validation";

export class AuthController implements Controller {
    path = '/auth'   
    router = Router()
    
    constructor() {
        this.initRoutes()
    }

    private initRoutes = () => {
        this.router.post(`${this.path}/signup`, validationMiddleware(signUpValidationSchema), this.signup)
        this.router.post(`${this.path}/signin`, validationMiddleware(signInValidationSchema), this.signin)
    }

    private async signup(req: Request, res: Response, next: NextFunction) {
        const { username, email, password } = req.body

        const authService = new AuthService()

        try {
            const payload = await authService.signup(username, email, password)

            res.status(200).json(payload)
        } catch (err: any) {
            next(new HttpException(400, err.message))
        }
    }

    private async signin(req: Request, res: Response, next: NextFunction) {
        const { email, password } = req.body

        const authService = new AuthService()

        try {
            const payload = await authService.signin(email, password)

            res.status(200).json(payload)
        } catch (err: any) {
            next(new HttpException(400, err.message))
        }
    }
=======
import { Router } from "express"
import { Controller } from "../interfaces/Controller.interfaces"

export class AuthController implements Controller{
  path = '/auth'
  router = Router()

  constructor() {
    this.initRoutes()
  }

  private initRoutes() {
    this.router.post(`${this.path}/login`)
    this.router.post(`${this.register}/register`)
  }

  public register() {
    console.log('Register')
  }

  public login() {
    console.log('Login')
  }
>>>>>>> 70aec13286822e409842793735c1daa7e79189c2
}