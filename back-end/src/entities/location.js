import { EntitySchema } from "typeorm";

export const LocationSchema = new EntitySchema({
    name: "Location",
    tableName: "locations",
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