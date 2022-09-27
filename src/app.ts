<<<<<<< HEAD
import express, { Express, Router } from 'express'

import mongoose from 'mongoose'

import cors from 'cors'

import helmet from 'helmet'

import morgan from 'morgan'

import { MONGODB_CONNSTRING } from './config/defaults.config'

import { Controller } from './interfaces/controller.interface'
import { errorMiddleware } from './middlewares/error.middlware'
=======
import express, { Express } from 'express'

import cors from 'cors'

import morgan from 'morgan'

import mongoose from 'mongoose'

import { MONGODB_URL } from './config/defaults.config'

import { errorMiddleware } from './middlewares/error.middleware'

import { Controller } from './interfaces/Controller.interfaces'
>>>>>>> 70aec13286822e409842793735c1daa7e79189c2

export default class App  {
    express: Express
    port: number
    controllers: Controller[]

<<<<<<< HEAD
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
=======
    constructor(controller: Controller[], express: Express, PORT: number) {
        this.express = express
        this.port = PORT
        this.controllers = controller

        this.initMiddlewares()
        this.initErrorMiddleware()
        this.initControllers()
>>>>>>> 70aec13286822e409842793735c1daa7e79189c2
    }

    public initApp() { 
        this.express.listen(this.port, () => console.log(`Server is running por port ${this.port}`))
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