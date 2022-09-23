import express, { Express } from 'express'

import cors from 'cors'

import morgan from 'morgan'

import mongoose from 'mongoose'

import { MONGODB_URL } from './config/defaults.config'

import { errorMiddleware } from './middlewares/error.middleware'

import { Controller } from './interfaces/Controller.interfaces'

export default class App  {
    express: Express
    port: number
    controllers: Controller[]

    constructor(controller: Controller[], express: Express, PORT: number) {
        this.express = express
        this.port = PORT
        this.controllers = controller

        this.initMiddlewares()
        this.initErrorMiddleware()
        this.initControllers()
    }

    public initApp() { 
        this.express.listen(3000, () => console.log(`Server is running por port ${this.port}`))
    }

    private initMiddlewares() {
        this.express.use(cors)
        this.express.use(morgan('dev'))
        this.express.use(express.urlencoded({ extended: false }))
        this.express.use(express.json())
    }

    private initErrorMiddleware() {
        this.express.use(errorMiddleware)
    }

    private initControllers() {
        this.controllers.forEach(controller => this.express.use(controller.path, controller.router))
    }

    private initConnectionToDb() {
        try {
            mongoose.connect(MONGODB_URL)
            console.log('Connected to DB')
        }
        catch {
            console.log('Cannot connect to DB')
        }
    }
}