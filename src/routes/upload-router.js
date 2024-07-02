import express from 'express'
import { authMiddleware } from '../middlewares'

const uploadRouter = express.Router()

uploadRouter.get('/image', authMiddleware)

export default uploadRouter