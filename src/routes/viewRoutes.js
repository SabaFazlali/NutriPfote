const express = require('express');
const router = express.Router();
const productService = require('../services/productService');
const guideService = require('../services/guideService');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/shop', (req, res) => {
    res.render('shop');
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

const authController = require('../controllers/authController');
const { body } = require('express-validator');

// Auth Routes
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/register', authController.getRegister);
router.post('/register', [
    body('name').notEmpty().withMessage('Name ist erforderlich'),
    body('email').isEmail().withMessage('Ungültige E-Mail-Adresse'),
    body('password').isLength({ min: 6 }).withMessage('Das Passwort muss mindestens 6 Zeichen lang sein')
], authController.postRegister);
router.get('/profile', authController.getProfile);
router.get('/logout', authController.logout);

// Checkout Routes
const checkoutController = require('../controllers/checkoutController');
router.get('/checkout', checkoutController.getCheckout);
router.post('/checkout', [
    body('fullName').notEmpty().withMessage('Vollständiger Name ist erforderlich'),
    body('email').isEmail().withMessage('Ungültige E-Mail-Adresse'),
    body('address').notEmpty().withMessage('Adresse ist erforderlich'),
    body('city').notEmpty().withMessage('Stadt ist erforderlich'),
    body('zipCode').notEmpty().withMessage('Postleitzahl ist erforderlich')
], checkoutController.postCheckout);
router.get('/checkout/success', checkoutController.getSuccess);

// Comparison Routes
const compareController = require('../controllers/compareController');
router.get('/compare', compareController.getCompare);

router.get('/about', (req, res) => {
    res.render('about', { title: 'Über uns - NutriPfote' });
});

module.exports = router;
