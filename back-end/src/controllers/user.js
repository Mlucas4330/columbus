import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { userRepository } from "../repositories/user.js"
import dotenv from 'dotenv'

dotenv.config()

export const signIn = async (req, res) => {
    const { email, password } = req.body

    const user = await userRepository.findOne({ where: { email } })

    if (!user) return res.status(401).send({ error: "Nenhum usuário encontrado com este e-mail" })

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) return res.status(401).json({ error: "Senha incorreta" })

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, user: { id: user.id, name: user.name, email: user.email } })
}

export const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = userRepository.create({ name, email, password: hashedPassword })

        await userRepository.save(user)

        res.status(201).send({ success: true })
    } catch (error) {
        console.error(error)
    }
}