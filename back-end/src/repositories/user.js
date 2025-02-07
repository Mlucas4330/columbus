import { database } from "../database.js";
import { UserSchema } from "../entities/user.js";

export const userRepository = database.getRepository(UserSchema)