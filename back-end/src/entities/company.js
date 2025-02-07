import { EntitySchema } from "typeorm";

export const CompanySchema = new EntitySchema({
    name: "Company",
    tableName: "companies",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar",
            unique: true
        }
    }
})