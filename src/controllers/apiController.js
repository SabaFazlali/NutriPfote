const productService = require('../services/productService');

const getProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving products' });
    }
};

const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await productService.getProductById(id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving product' });
    }
};

module.exports = {
    getProducts,
    getProductById
};
