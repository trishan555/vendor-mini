import Product from '../models/Products.js'

export const addProduct = async (req, res) => {
    const sku = req.body.sku
    const name = req.body.name
    const qty = Number(req.body.qty)
    const desc = req.body.desc
    const { fileName } = req.file

    const product = new Product({
        sku,
        name,
        qty,
        desc,
        fileName,
    })

    await Product.create(product)
        .then((product) => {
            return res.status(200).json({
                success: true,
                message: 'Product added successfully',
                product: product,
            })
        })
        .catch((err) => {
            return res.status(500).json({
                success: false,
                message: 'Product adding failed',
                error: err,
            })
        })
}
export const getAllProducts = async (req, res) => {
    await Product.find()
        .then((products) => {
            return res.status(200).json({
                success: true,
                message: 'Products retrieved successfully',
                products: products,
            })
        })
        .catch((err) => {
            return res.status(500).json({
                success: false,
                message: 'Error retrieving products',
                error: err,
            })
        })
}

export const deleteProduct = async (req, res) => {
    const productId = req.params.id

    await Product.findByIdAndDelete(productId)
        .then(() => {
            return res.status(200).json({
                success: true,
                message: 'Product deleted successfully',
            })
        })
        .catch((err) => {
            return res.status(500).json({
                success: false,
                message: 'Error deleting product',
                error: err,
            })
        })
}

export const getSingleProduct = async (req, res) => {
    let productId = req.params.id

    await Product.findById(productId)
        .then((product) => {
            return res.status(200).send({
                success: true,
                message: 'Product retrieved successfully',
                product,
            })
        })
        .catch((err) => {
            return res.status(500).json({
                success: false,
                message: 'Error retrieving product',
                error: err,
            })
        })
}

export const updateProduct = async (req, res) => {
    const productId = req.params.id

    const { sku, name, qty, desc } = req.body
    const fileName = req.file

    const updateProduct = {
        sku,
        name,
        qty,
        desc,
        fileName,
    }

    await Product.findByIdAndUpdate(productId, updateProduct)
        .then((product) => {
            return res.status(200).json({
                success: true,
                message: 'Product updated successfully',
            })
        })
        .catch((err) => {
            return res.status(500).json({
                success: false,
                message: 'Error updating product',
                error: err,
            })
        })
}
