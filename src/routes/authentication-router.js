import express from 'express'
import authenticationController from '../controllers/authentication-controller'

const authenticationRouter = express.Router()

authenticationRouter.post('/sign-up', express.json(), authenticationController.signUp)
authenticationRouter.post('/sign-in', express.json(), authenticationController.signIn)
authenticationRouter.post('/refresh-token',  authenticationController.refreshToken)
authenticationRouter.get('/sign-out',  authenticationController.signOut)

export default authenticationRouter