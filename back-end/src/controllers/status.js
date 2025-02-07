import { statusRepository } from "../repositories/status.js"

export const get = async (req, res) => {
    try {
        const statuses = await statusRepository.find({
            order: {
                description: "ASC"
            }
        })

        res.send(statuses)
    } catch(error){
        console.error(error)
    }
}