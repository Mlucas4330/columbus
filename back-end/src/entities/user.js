import { EntitySchema } from "typeorm"

export const UserSchema = new EntitySchema({
    name: "User",
    tableName: "users",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name: {
            type: "varchar",
        },
        email: {
            type: "varchar"
        },
        password: {
            type: "varchar"
        }
    },
    relations: {
        products: {
            target: "Product",
            type: "one-to-many",
            joinTable: true,
            cascade: true
        }
    }
})