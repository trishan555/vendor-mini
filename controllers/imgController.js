import multer from 'multer'
import Image from '../models/image'
import fs from 'fs'
import path from 'path'

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
})

const upload = multer({ storage: Storage }).single('file')

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
