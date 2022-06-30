import multer from 'multer'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}.jpg`)
    },
})

const upload = multer({ storage }).single('productImage')

export default upload
