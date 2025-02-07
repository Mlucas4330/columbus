import { Router } from "express"
import { get } from "../controllers/location.js"

export const locationRouter = Router()

locationRouter.get('/locations', get)