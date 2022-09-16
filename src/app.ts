import { Express } from 'express'

export default class App  {
    express: Express
    port: number

    constructor(express: Express, PORT: number) {
        this.express = express
        this.port = PORT
    }

    public initApp() { 
        this.express.listen(3000, () => console.log(`Server is running por port ${this.port}`))
    }
}