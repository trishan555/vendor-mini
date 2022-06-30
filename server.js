import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
import dotenv from 'dotenv'
dotenv.config()

app.use(cors())
app.use(bodyParser.json())

const URL = process.env.MONGODB_URL

mongoose.connect(URL)

const connection = mongoose.connection
connection.once('open', () => {
    console.log('Mongodb connection success!')
})

import router from './routes/products.js'

app.use('/api', router)

//port defining
const PORT = process.env.PORT || 8070

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})
