import { database } from "../database.js";
import { CompanySchema } from "../entities/company.js";

export const companyRepository = database.getRepository(CompanySchema)