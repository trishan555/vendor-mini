import { mongoose } from 'mongoose'
const { Schema } = mongoose

const productSchema = new Schema({
    sku: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    qty: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
        required: false,
    },

    fileName: {
        type: String,
        required: true,
    },
})

const Product = mongoose.model('Product', productSchema)

export default Product
