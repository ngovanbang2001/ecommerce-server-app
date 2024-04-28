import CustomError from './custom-error'

class BadRequestError extends CustomError {
  constructor(...args) {
    super(...args)
    this.status = 400
  }
}

export default BadRequestError
