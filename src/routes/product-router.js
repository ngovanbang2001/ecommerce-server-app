import express from 'express'
import { authMiddleware } from '../middlewares'

const productRouter = express.Router()

productRouter.get('/list', express.json(), authMiddleware, userController.info)
productRouter.post('/create', express.json(), authMiddleware, userController.info)
productRouter.put('/:id', express.json(), authMiddleware, userController.info)
productRouter.delete('/:id', express.json(), authMiddleware, userController.info)

export default productRouter