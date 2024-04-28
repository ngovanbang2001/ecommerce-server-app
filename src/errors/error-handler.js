import { StatusCodes } from 'http-status-codes'

import CustomError from './custom-error'

function errorHandler(err, req, res, next) {
  let message = 'An unhandled error has occurred from our server.'
  let status = StatusCodes.INTERNAL_SERVER_ERROR

  if (err instanceof CustomError) {
    status = err.status
    message = err.message
    console.error('Error: ', { message, status })
  } else {
    console.error(err)
  }

  res.status(status).json({
    error: {
      message
    }
  })
}

export default errorHandler