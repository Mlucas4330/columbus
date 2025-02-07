import { Router } from "express"
import { signIn, signUp } from "../controllers/user.js"

export const userRouter = Router()

userRouter.post('/sign-in', signIn)
userRouter.post('/sign-up', signUp)