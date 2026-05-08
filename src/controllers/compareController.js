const productService = require('../services/productService');

const getCompare = async (req, res) => {
    // The products to compare will be passed as IDs in the query string or handled via client-side storage
    // For simplicity, we'll look for IDs in query like ?ids=p1,p2,p3
    const idsString = req.query.ids;
    let products = [];

    if (idsString) {
        const ids = idsString.split(',').slice(0, 3);
        const allProducts = await productService.getAllProducts();
        products = allProducts.filter(p => ids.includes(p.id));
    }

    res.render('compare', { 
        title: 'Produktvergleich - NutriPfote',
        products
    });
};

module.exports = {
    getCompare
};
