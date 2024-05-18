import CustomError from './custom-error.js'

class ForbiddenError extends CustomError {
  constructor(...args) {
    super(...args)
    this.status = 403
  }
}

export default ForbiddenError
