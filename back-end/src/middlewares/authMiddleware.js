import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1]

    if (!token) return res.status(401).send({ error: "Acesso negado" })

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decoded.userId

        next()
    } catch (error) {
        res.status(400).send({ error: "Token inválido" })
    }
}