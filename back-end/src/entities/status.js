import { EntitySchema } from "typeorm";

export const StatusSchema = new EntitySchema({
    name: "Status",
    tableName: "statuses",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        description: {
            type: "varchar",
            unique: true
        }
    }
})