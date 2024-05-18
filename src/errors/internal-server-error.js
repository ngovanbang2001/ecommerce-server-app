import CustomError from './custom-error.js'

class InternalServerError extends CustomError {
  constructor(...args) {
    super(...args)
    this.status = 500
  }
}

export default InternalServerError
