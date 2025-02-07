import { database } from "../database.js";
import { StatusSchema } from "../entities/status.js";

export const statusRepository = database.getRepository(StatusSchema)