import { z } from "zod";

export const signInSchema = z.object({
    email: z.string().email("E-mail inválido").min(5, "O e-email deve possuir pelo menos 5 caractéres"),
    password: z.string().min(6, "A senha deve possuir pelo menos 6 caractéres"),
})