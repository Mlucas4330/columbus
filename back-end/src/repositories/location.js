import { database } from "../database.js";
import { LocationSchema } from "../entities/location.js";

export const locationRepository = database.getRepository(LocationSchema)