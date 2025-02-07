import { locationRepository } from "../repositories/location.js"

export const get = async (req, res) => {
    try {
        const locations = await locationRepository.find({
            order: {
                name: "ASC"
            }
        })

        res.send(locations)
    } catch(error){
        console.error(error)
    }
}