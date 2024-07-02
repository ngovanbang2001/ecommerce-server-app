import express from 'express'
import { authMiddleware } from '../middlewares'

const productRouter = express.Router()

productRouter.get('/list', express.json(), authMiddleware)
productRouter.post('/create', express.json(), authMiddleware)
productRouter.put('/:id', express.json(), authMiddleware)
productRouter.delete('/:id', express.json(), authMiddleware)

export default productRouter