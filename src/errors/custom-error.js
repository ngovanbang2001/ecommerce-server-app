class CustomError extends Error {
  constructor(message, status, ...args) {
    super(message, ...args)
    this.status = status
  }
}

export default CustomError
