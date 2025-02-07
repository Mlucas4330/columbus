import { EntitySchema } from "typeorm";

export const ProductSchema = new EntitySchema({
    name: "Product",
    tableName: "products",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        totalValue: {
            type: "decimal",
            precision: 10,
            scale: 2
        }
    },
    relations: {
        origin: {
            target: "Location",
            type: "many-to-one",
            joinColumn: true
        },
        destination: {
            target: "Location",
            type: "many-to-one",
            joinColumn: true
        },
        status: {
            target: "Status",
            type: "many-to-one",
            joinColumn: true
        },
        importer: {
            target: "Company",
            type: "many-to-one",
            joinColumn: true
        },
        exporter: {
            target: "Company",
            type: "many-to-one",
            joinColumn: true
        },
        transport: {
            target: "Transport",
            type: "many-to-one",
            joinColumn: true
        },
        currency: {
            target: "Currency",
            type: "many-to-one",
            joinColumn: true
        },
        freightMode: {
            target: "FreightMode",
            type: "many-to-one",
            joinColumn: true
        },
        user: {
            target: "User",
            type: "many-to-one",
            joinColumn: true
        }
    }
})