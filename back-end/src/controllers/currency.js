import { currencyRepository } from "../repositories/currency.js"

export const get = async (req, res) => {
    try {
        const currencies = await currencyRepository.find({
            order: {
                code: "ASC"
            }
        })

        res.send(currencies)
    } catch(error){
        console.error(error)
    }
}