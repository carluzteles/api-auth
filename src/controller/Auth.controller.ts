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
}