import { Router } from "express"
import { get } from "../controllers/currency.js"

export const currencyRouter = Router()

currencyRouter.get('/currencies', get)