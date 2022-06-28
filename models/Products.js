const mongoose = require('mongoose')

const Schema = mongoose.Schema

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
    imgIds: {
        type: Array,
    },

    imgs: {
        type: String,
        required: false,
    },
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
