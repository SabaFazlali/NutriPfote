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
        const guides = await guideService.getAllGuides();
        const relatedGuides = guides.filter(guide => (product.guideIds || []).includes(guide.id));
        res.render('product', { product, relatedGuides });
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
        const products = await productService.getAllProducts();
        const relatedProducts = products.filter(product => (guide.relatedProductIds || []).includes(product.id));
        const alternativeProducts = products.filter(product => {
            const allergyTags = guide.allergyTags || [];
            return allergyTags.length > 0 && product.allergyTags && product.allergyTags.some(tag => allergyTags.includes(tag));
        });
        res.render('guide-detail', { guide, relatedProducts, alternativeProducts });
    } catch (error) {
        console.error("Error loading guide detail:", error);
        res.status(500).send("Internal Server Error");
    }
});

const authController = require('../controllers/authController');
const { body } = require('express-validator');
const consultationController = require('../controllers/consultationController');
const adminController = require('../controllers/adminController');

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

// Consultation Routes
router.get('/consultation', consultationController.getConsultation);
router.post('/consultation', [
    body('name').notEmpty().withMessage('Name ist erforderlich'),
    body('email').isEmail().withMessage('Gueltige E-Mail-Adresse ist erforderlich'),
    body('animalType').notEmpty().withMessage('Tierart ist erforderlich'),
    body('topic').notEmpty().withMessage('Thema ist erforderlich'),
    body('message').isLength({ min: 10 }).withMessage('Nachricht muss mindestens 10 Zeichen lang sein')
], consultationController.postConsultation);

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

// Admin Routes
router.get('/admin', adminController.isAdmin, adminController.getAdminHome);
router.get('/admin/products', adminController.isAdmin, adminController.getProducts);
router.post('/admin/products', adminController.isAdmin, adminController.postProduct);
router.get('/admin/products/:id/edit', adminController.isAdmin, adminController.getEditProduct);
router.post('/admin/products/:id/edit', adminController.isAdmin, adminController.postEditProduct);
router.post('/admin/products/:id/delete', adminController.isAdmin, adminController.postDeleteProduct);
router.get('/admin/guides', adminController.isAdmin, adminController.getGuides);
router.post('/admin/guides', adminController.isAdmin, adminController.postGuide);
router.get('/admin/guides/:id/edit', adminController.isAdmin, adminController.getEditGuide);
router.post('/admin/guides/:id/edit', adminController.isAdmin, adminController.postEditGuide);
router.post('/admin/guides/:id/delete', adminController.isAdmin, adminController.postDeleteGuide);
router.get('/admin/orders', adminController.isAdmin, adminController.getOrders);
router.get('/admin/questions', adminController.isAdmin, adminController.getQuestions);

module.exports = router;
