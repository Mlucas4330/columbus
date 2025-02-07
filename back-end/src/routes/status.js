import { Router } from "express"
import { get } from "../controllers/status.js"

export const statusRouter = Router()

statusRouter.get('/statuses', get)