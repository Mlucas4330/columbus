import { database } from "../database.js";
import { CurrencySchema } from "../entities/currency.js";

export const currencyRepository = database.getRepository(CurrencySchema)