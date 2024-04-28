import express from 'express'
import * as controllers from '../controllers/index.js'

const authenticationRouter = express.Router()

authenticationRouter.post('/sign-up', express.json(), controllers.authenticationControllers.signUp)
authenticationRouter.post('/sign-in', express.json(), controllers.authenticationControllers.signIn)
authenticationRouter.post('/refresh-token', controllers.authenticationControllers.refreshTokenService)

export default authenticationRouter