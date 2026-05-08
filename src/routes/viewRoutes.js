const express = require('express');
const router = express.Router();
const productService = require('../services/productService');
const guideService = require('../services/guideService');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/product/:id', async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.id);
        if (!product) {
            return res.status(404).render('index');
        }
        res.render('product', { product });
    } catch (error) {
        console.error("Error loading product:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.get('/guides', async (req, res) => {
    try {
        const guides = await guideService.getAllGuides();
        res.render('guides', { guides });
    } catch (error) {
        console.error("Error loading guides:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.get('/guide/:id', async (req, res) => {
    try {
        const guide = await guideService.getGuideById(req.params.id);
        if (!guide) {
            return res.status(404).render('guides', { guides: await guideService.getAllGuides() });
        }
        res.render('guide-detail', { guide });
    } catch (error) {
        console.error("Error loading guide detail:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;
