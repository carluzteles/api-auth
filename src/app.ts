import express, { Express, Router } from 'express'

import mongoose from 'mongoose'

import cors from 'cors'

import helmet from 'helmet'

import morgan from 'morgan'

import { MONGODB_CONNSTRING } from './config/defaults.config'

import { Controller } from './interfaces/controller.interface'
import { errorMiddleware } from './middlewares/error.middlware'

export default class App  {
    express: Express
    port: number

    constructor(controllers: Controller[], express: Express, PORT: number) {
        this.express = express
        this.port = PORT

        this.initDbConnection()
        this.initMiddlwares()
        this.initControllers(controllers)
        this.initErrorMiddleware()
    }

    private initControllers(controllers: Controller[]) {
        controllers.forEach(controller => this.express.use(controller.router))
    }

    private initDbConnection() {
        try {
            mongoose.connect(MONGODB_CONNSTRING)
            console.log('Connected to DB')
        } catch (err) {
            console.log(err)
        }
    }

    private initMiddlwares() {
        this.express.use(helmet())
        this.express.use(cors())
        this.express.use(morgan('dev'))
        this.express.use(express.json())
        this.express.use(express.urlencoded({ extended: false }))
    }  

    private initErrorMiddleware() {
        this.express.use(errorMiddleware)
    }

    public initApp() { 
        this.express.listen(this.port, () => console.log(`Server is running por port ${this.port}`))
    }
}