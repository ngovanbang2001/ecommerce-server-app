import express from 'express'
import { authMiddleware } from '../middlewares'
import uploadController from '../controllers/upload-controller'
const multer  = require('multer')

const storage = multer.memoryStorage();
const upload = multer({ storage });

const uploadRouter = express.Router()

uploadRouter.post('/image', authMiddleware, upload.single('avatar'), uploadController.image)

export default uploadRouter