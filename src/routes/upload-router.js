import express from 'express'
import userController from '../controllers/user-controller'
import { authMiddleware } from '../middlewares'

const uploadRouter = express.Router()

uploadRouter.get('/image', authMiddleware, userController.info)

export default uploadRouter