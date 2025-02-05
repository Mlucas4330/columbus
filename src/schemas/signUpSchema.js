import { z } from "zod";

export const signUpSchema = z.object({
    name: z.string().min(3, "O nome deve possuir pelo menos 3 caractéres"),
    email: z.string().email("E-mail inválido").min(5, "O e-email deve possuir pelo menos 5 caractéres"),
    password: z.string().min(6, "A senha deve possuir pelo menos 6 caractéres"),
    rPassword: z.string(),
}).refine((data) => data.password === data.rPassword, {
    message: "As senhas não coincidem",
    path: ["rPassword"]
})