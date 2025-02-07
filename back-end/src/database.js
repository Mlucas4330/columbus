import { DataSource } from "typeorm"
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const database = new DataSource({
    type: "mysql",
    host: "mysql",
    port: 3306,
    database: "columbus",
    username: "columbus",
    password: "columbus",
    entities: [path.join(__dirname, "entities", "*.js")],
    migrations: [path.join(__dirname, "migrations", "*.js")],
    synchronize: false,
    logging: false
})