import CustomError from './custom-error.js'

class RefreshTokenExpiredError extends CustomError {
  constructor(...args) {
    super(...args)
    this.status = 419
  }
}

export default RefreshTokenExpiredError
