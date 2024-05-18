import CustomError from './custom-error.js'

class NotFoundError extends CustomError {
  constructor(...args) {
    super(...args)
    this.status = 404
  }
}

export default NotFoundError
