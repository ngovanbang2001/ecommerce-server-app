import CustomError from './custom-error'

class UnauthorizedError extends CustomError {
  constructor(...args) {
    super(...args)
    this.status = 401
  }
}

export default UnauthorizedError
