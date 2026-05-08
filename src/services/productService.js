const { readJSON } = require('../utils/jsonReader');

const getAllProducts = async () => {
    const products = await readJSON('products.json');
    return products;
};

const getProductById = async (id) => {
    const products = await readJSON('products.json');
    return products.find(product => product.id === id);
};

module.exports = {
    getAllProducts,
    getProductById
};
