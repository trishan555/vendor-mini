import Product from '../models/product'

export const addProduct = async (req, res) => {
    const { product } = req.body

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
                message: 'SKU ID already exists',
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
    const { productId } = req.query

    await Product.findByIdAndDelete(productId)
        .then((product) => {
            return res.status(200).json({
                success: true,
                message: 'Product deleted successfully',
                product: product,
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
    const { productId } = req.query

    await Product.findById(productId)
        .then((product) => {
            return res.status(200).json({
                success: true,
                message: 'Product retrieved successfully',
                product: product,
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
    const { productId, product } = req.body

    await Product.findByIdAndUpdate(productId, product)
        .then((product) => {
            return res.status(200).json({
                success: true,
                message: 'Product updated successfully',
                product: product,
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
