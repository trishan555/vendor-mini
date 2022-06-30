import { mongoose } from 'mongoose'

const { Schema } = mongoose

const imageSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        img: {
            data: Buffer,
            contentType: String,
        },
    },
    { timestamps: true }
)

const ImageSchema = mongoose.model('Image', imageSchema)
export default ImageSchema
