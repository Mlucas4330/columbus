import { EntitySchema } from "typeorm";

export const FreightModeSchema = new EntitySchema({
    name: "FreightMode",
    tableName: "freight_modes",
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