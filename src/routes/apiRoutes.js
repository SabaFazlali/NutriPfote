const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/products', apiController.getProducts);
router.get('/products/:id', apiController.getProductById);

module.exports = router;
