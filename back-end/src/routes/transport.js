import { Router } from "express"
import { get } from "../controllers/transport.js"

export const transportRouter = Router()

transportRouter.get('/transports', get)