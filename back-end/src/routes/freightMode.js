import { Router } from "express"
import { get } from "../controllers/freightMode.js"

export const freightModeRouter = Router()

freightModeRouter.get('/freight_modes', get)