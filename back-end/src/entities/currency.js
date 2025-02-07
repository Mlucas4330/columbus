import { EntitySchema } from "typeorm";

export const CurrencySchema = new EntitySchema({
    name: "Currency",
    tableName: "currencies",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        code: {
            type: "varchar",
            unique: true
        }
    }
})