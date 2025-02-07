import { productRepository } from "../repositories/product.js"

export const get = async (req, res) => {
    try {
        const products = await productRepository.find({
            where: {
                user: {
                    id: req.userId
                }
            },
            relations: ["currency", "status", "transport", "freightMode", "exporter", "importer", "origin", "destination"],
            order: {
                id: "ASC"
            }
        })

        res.send({
            data: products
        })
    } catch (error) {
        console.error(error)
    }
}

export const create = async (req, res) => {
    try {
        const { totalValue, origin, destination, importer, exporter, transport, currency, freightMode, status } = req.body

        const product = productRepository.create({
            totalValue,
            origin: { id: origin },
            destination: { id: destination },
            importer: { id: importer },
            exporter: { id: exporter },
            transport: { id: transport },
            currency: { id: currency },
            freightMode: { id: freightMode },
            status: { id: status },
            user: { id: req.userId }
        })

        await productRepository.save(product)

        res.status(201).send({ success: true })
    } catch (error) {
        console.error(error)
    }
}

export const destroy = async (req, res) => {
    try {
        await productRepository.delete(req.params.id)
        res.send({ success: true })
    } catch (error) {
        console.error(error)
    }
}