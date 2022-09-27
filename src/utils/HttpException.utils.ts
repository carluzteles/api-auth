<<<<<<< HEAD
export default class HttpException extends Error {
    status!: number
    message!: string

    constructor(status: number, message: string) {
        super(message)
        this.status = status
        this.message = message
    }
=======
export class HttpException extends Error {
  status!: number
  message!: string
  
  constructor(status: number, message: string) {
    super(message)

    this.status = status
    this.message = message
  }
>>>>>>> 70aec13286822e409842793735c1daa7e79189c2
}