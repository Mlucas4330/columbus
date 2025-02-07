import { z } from "zod";

export const productSchema = z.object({
    totalValue: z.coerce.number().positive("O valor total deve ser um número positivo"),
    currency: z.string().min(1, "Moeda não pode ser vazia"),
    status: z.string().min(1, "Status não pode ser vazio"),
    importer: z.string().min(1, "Importador não pode ser vazio"),
    exporter: z.string().min(1, "Exportador não pode ser vazio"),
    origin: z.string().min(1, "Origem não pode ser vazia"),
    destination: z.string().min(1, "Destino não pode ser vazio"),
    transport: z.string().min(1, "Transporte não pode ser vazio"),
    freightMode: z.string().min(1, "Modo de frete não pode ser vazio")
})