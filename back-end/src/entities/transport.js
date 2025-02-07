import { EntitySchema } from "typeorm";

export const TransportSchema = new EntitySchema({
    name: "Transport",
    tableName: "transports",
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