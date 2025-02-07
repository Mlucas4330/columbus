import { Router } from "express"
import { create, destroy, get } from "../controllers/product.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

export const productRouter = Router()

productRouter.get('/products', authMiddleware, get)
productRouter.post('/products', authMiddleware, create)
productRouter.delete('/products/:id', authMiddleware, destroy)