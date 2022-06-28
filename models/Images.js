const mongoose = require('mongoose')

const Schema = mongoose.Schema

const imageSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: Buffer,
            contentType: String,
        },
    },
    { timestamps: true }
)

const Image = mongoose.model('Image', imageSchema)
module.exports = Image
