const orderService = require('../services/orderService');
const { validationResult } = require('express-validator');

const getCheckout = (req, res) => {
    res.render('checkout', { 
        title: 'Kasse - NutriPfote',
        errors: [],
        formData: {}
    });
};

const postCheckout = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render('checkout', { 
            title: 'Kasse', 
            errors: errors.array(), 
            formData: req.body 
        });
    }

    const { fullName, email, address, city, zipCode, cartData } = req.body;
    
    try {
        const cart = JSON.parse(cartData || '[]');
        
        if (cart.length === 0) {
            return res.render('checkout', { 
                title: 'Kasse', 
                errors: [{ msg: 'Ihr Warenkorb ist leer.' }], 
                formData: req.body 
            });
        }

        const order = await orderService.createOrder({
            userId: req.session.user ? req.session.user.id : 'guest',
            customer: { fullName, email, address, city, zipCode },
            items: cart,
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            status: 'Pending'
        });

        res.redirect('/checkout/success?orderId=' + order.id);
    } catch (error) {
        console.error('Checkout error:', error);
        res.status(500).render('checkout', { 
            title: 'Kasse', 
            errors: [{ msg: 'Ein Fehler ist beim Verarbeiten Ihrer Bestellung aufgetreten.' }], 
            formData: req.body 
        });
    }
};

const getSuccess = (req, res) => {
    res.render('success', { 
        title: 'Vielen Dank - NutriPfote',
        orderId: req.query.orderId
    });
};

module.exports = {
    getCheckout,
    postCheckout,
    getSuccess
};
