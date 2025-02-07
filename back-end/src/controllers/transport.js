import { transportRepository } from "../repositories/transport.js"

export const get = async (req, res) => {
    try {
        const transports = await transportRepository.find({
            order: {
                name: "ASC"
            }
        })

        res.send(transports)
    } catch(error){
        console.error(error)
    }
}