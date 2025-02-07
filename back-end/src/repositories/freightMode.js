import { database } from "../database.js";
import { FreightModeSchema } from "../entities/freightMode.js";

export const freightModeRepository = database.getRepository(FreightModeSchema)