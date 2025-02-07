import { database } from "../database.js";
import { ProductSchema } from "../entities/product.js";

export const productRepository = database.getRepository(ProductSchema)