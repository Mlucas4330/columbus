import express, { json } from 'express'
import { database } from './src/database.js'
import { statusRouter } from './src/routes/status.js'
import cors from 'cors'
import { locationRouter } from './src/routes/location.js'
import { currencyRouter } from './src/routes/currency.js'
import { companyRouter } from './src/routes/company.js'
import { transportRouter } from './src/routes/transport.js'
import { freightModeRouter } from './src/routes/freightMode.js'
import { userRouter } from './src/routes/user.js'
import { productRouter } from './src/routes/product.js'

const app = express()

database.initialize().then(() => {
    app.use(express.static('public'))
    app.use(cors())
    app.use(json())

    app.use('/api', [statusRouter, locationRouter, currencyRouter, companyRouter, transportRouter, freightModeRouter, userRouter, productRouter])

    app.get('*', (_req, res) => {
        res.sendFile('index.html', { root: 'public' })
    })

    app.listen(3000, () => {
        'Server listening to: ' + 3000
    })
}).catch(error => {
    console.error(error)
})
