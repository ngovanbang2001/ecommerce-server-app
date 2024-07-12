import express from 'express'
import userController from '../controllers/user-controller'
import { authMiddleware } from '../middlewares'

const userRouter = express.Router()

userRouter.get('/info', express.json(), authMiddleware, userController.info)
userRouter.post('/update', express.json(), authMiddleware, userController.updateProfile)
userRouter.post('/update-image', express.json(), authMiddleware, userController.updateProfile)

export default userRouter