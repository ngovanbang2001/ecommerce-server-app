import express from 'express'
import userController from '../controllers/user-controller'
import { authMiddleware } from '../middlewares'

const userRouter = express.Router()

userRouter.get('/info', express.json(), authMiddleware, userController.info)

export default userRouter