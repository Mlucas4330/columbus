import { database } from "../database.js";
import { TransportSchema } from "../entities/transport.js";

export const transportRepository = database.getRepository(TransportSchema)