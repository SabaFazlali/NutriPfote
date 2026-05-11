const { readJSON, writeJSON } = require('../utils/jsonReader');

const getAllProducts = async () => {
    const products = await readJSON('products.json');
    return products;
};

const getProductById = async (id) => {
    const products = await readJSON('products.json');
    return products.find(product => product.id === id);
};

const createProduct = async (productData) => {
    const products = await getAllProducts();
    const newProduct = {
        id: productData.id || 'p-' + Date.now(),
        ...productData
    };

    products.push(newProduct);
    await writeJSON('products.json', products);
    return newProduct;
};

const updateProduct = async (id, productData) => {
    const products = await getAllProducts();
    const index = products.findIndex(product => product.id === id);

    if (index === -1) {
        return null;
    }

    products[index] = {
        ...products[index],
        ...productData,
        id
    };

    await writeJSON('products.json', products);
    return products[index];
};

const deleteProduct = async (id) => {
    const products = await getAllProducts();
    const filteredProducts = products.filter(product => product.id !== id);

    if (filteredProducts.length === products.length) {
        return false;
    }

    await writeJSON('products.json', filteredProducts);
    return true;
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};
