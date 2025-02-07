import { companyRepository } from "../repositories/company.js"

export const get = async (req, res) => {
    try {
        const companies = await companyRepository.find({
            order: {
                name: "ASC"
            }
        })

        res.send(companies)
    } catch(error){
        console.error(error)
    }
}