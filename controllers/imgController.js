import { Image } from '../models/Images.js'
import { fs } from 'fs'
import { path } from 'path'

export const uploadImage = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            // res.
        } else {
            await Image.create(
                new Image({
                    name: Date.now().toString(),
                    image: fs.readFileSync(
                        path.join(
                            __dirname,
                            '..',
                            '/uploads/' + req.file.originalname
                        )
                    ),
                })
            )
                .then((result) => {
                    res.status(201).json({
                        message: 'File uploaded!',
                        result: result._id,
                    })
                })
                .catch((err) => {
                    res.status(500).json({
                        message: 'Error uploading file',
                        error: err,
                    })
                })
        }
    })
}

export const getUploadedImage = async (req, res) => {
    const { imageId } = req.query

    await Image.findById(imageId)
        .then((result) => {
            res.status(200).json({
                message: 'File loaded!',
                result: result,
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: 'Error loading file',
                error: err,
            })
        })
}
