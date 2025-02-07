import { freightModeRepository } from "../repositories/freightMode.js"

export const get = async (req, res) => {
    try {
        const freightModes = await freightModeRepository.find({
            order: {
                name: "ASC"
            }
        })

        res.send(freightModes)
    } catch(error){
        console.error(error)
    }
}