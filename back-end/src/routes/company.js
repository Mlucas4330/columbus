import { Router } from "express"
import { get } from "../controllers/company.js"

export const companyRouter = Router()

companyRouter.get('/companies', get)