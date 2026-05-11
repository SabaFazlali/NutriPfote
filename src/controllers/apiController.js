const productService = require('../services/productService');
const guideService = require('../services/guideService');
const orderService = require('../services/orderService');
const questionService = require('../services/questionService');
const { validationResult } = require('express-validator');

const getProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Produkte' });
    }
};

const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await productService.getProductById(id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Produkt nicht gefunden' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen des Produkts' });
    }
};

const getGuides = async (req, res) => {
    try {
        const guides = await guideService.getAllGuides();
        res.json(guides);
    } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Ratgeber' });
    }
};

const getGuideById = async (req, res) => {
    try {
        const guide = await guideService.getGuideById(req.params.id);
        if (!guide) {
            return res.status(404).json({ message: 'Ratgeber nicht gefunden' });
        }
        res.json(guide);
    } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen des Ratgebers' });
    }
};

const createOrder = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const order = await orderService.createOrder({
            userId: req.session.user ? req.session.user.id : 'guest',
            customer: req.body.customer,
            items: req.body.items,
            total: req.body.total,
            status: 'Pending'
        });
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Bestellung konnte nicht gespeichert werden' });
    }
};

const createQuestion = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const question = await questionService.createQuestion(req.body);
        res.status(201).json(question);
    } catch (error) {
        res.status(500).json({ message: 'Anfrage konnte nicht gespeichert werden' });
    }
};

module.exports = {
    getProducts,
    getProductById,
    getGuides,
    getGuideById,
    createOrder,
    createQuestion
};
