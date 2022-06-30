import express from 'express'
import upload from '../middleware/multer.js'

const router = express.Router()

import {
    addProduct,
    deleteProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
} from '../controllers/productController.js'

router.post('/product/addProduct', upload, addProduct)
router.get('/product/fetchProducts', getAllProducts)
router.get('/product/fetch-single-Product/:id', getSingleProduct)
router.delete('/product/deleteProduct/:id', deleteProduct)
router.put('/product/updateProduct/:id', updateProduct)

export default router
