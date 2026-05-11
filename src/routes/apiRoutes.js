const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const { body } = require('express-validator');

router.get('/products', apiController.getProducts);
router.get('/products/:id', apiController.getProductById);
router.get('/guides', apiController.getGuides);
router.get('/guides/:id', apiController.getGuideById);

router.post('/orders', [
    body('customer.fullName').notEmpty().withMessage('Name ist erforderlich'),
    body('customer.email').isEmail().withMessage('Gueltige E-Mail ist erforderlich'),
    body('items').isArray({ min: 1 }).withMessage('Mindestens ein Warenkorb-Artikel ist erforderlich')
], apiController.createOrder);

router.post('/questions', [
    body('name').notEmpty().withMessage('Name ist erforderlich'),
    body('email').isEmail().withMessage('Gueltige E-Mail ist erforderlich'),
    body('animalType').notEmpty().withMessage('Tierart ist erforderlich'),
    body('topic').notEmpty().withMessage('Thema ist erforderlich'),
    body('message').isLength({ min: 10 }).withMessage('Nachricht muss mindestens 10 Zeichen lang sein')
], apiController.createQuestion);

module.exports = router;
