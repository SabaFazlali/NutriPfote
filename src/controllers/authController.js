const userService = require('../services/userService');
const { validationResult } = require('express-validator');

const getLogin = (req, res) => {
    res.render('login', { 
        title: 'Anmelden - NutriPfote',
        errors: [],
        formData: {}
    });
};

const postLogin = async (req, res) => {
    const { email, password } = req.body;
    const errors = [];

    try {
        const user = await userService.getUserByEmail(email);
        
        if (!user) {
            errors.push({ msg: 'Ungültige E-Mail-Adresse oder Passwort.' });
            return res.render('login', { title: 'Anmelden', errors, formData: { email } });
        }

        const isMatch = await userService.validatePassword(user, password);
        if (!isMatch) {
            errors.push({ msg: 'Ungültige E-Mail-Adresse oder Passwort.' });
            return res.render('login', { title: 'Anmelden', errors, formData: { email } });
        }

        // Set session
        req.session.user = {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        };

        res.redirect('/profile');
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).render('login', { title: 'Anmelden', errors: [{ msg: 'Ein interner Fehler ist aufgetreten.' }], formData: { email } });
    }
};

const getRegister = (req, res) => {
    res.render('register', { 
        title: 'Registrieren - NutriPfote',
        errors: [],
        formData: {}
    });
};

const postRegister = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render('register', { 
            title: 'Registrieren', 
            errors: errors.array(), 
            formData: req.body 
        });
    }

    const { name, email, password } = req.body;

    try {
        const existingUser = await userService.getUserByEmail(email);
        if (existingUser) {
            return res.render('register', { 
                title: 'Registrieren', 
                errors: [{ msg: 'Diese E-Mail-Adresse wird bereits verwendet.' }], 
                formData: req.body 
            });
        }

        const newUser = await userService.createUser({ name, email, password });
        
        // Auto-login after registration
        req.session.user = newUser;
        res.redirect('/profile');
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).render('register', { 
            title: 'Registrieren', 
            errors: [{ msg: 'Ein interner Fehler ist aufgetreten.' }], 
            formData: req.body 
        });
    }
};

const getProfile = async (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    
    // In a real app, we'd fetch orders here too
    const orderService = require('../services/orderService');
    const orders = await orderService.getOrdersByUserId(req.session.user.id);

    res.render('profile', { 
        title: 'Mein Profil - NutriPfote',
        user: req.session.user,
        orders: orders || []
    });
};

const logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
};

module.exports = {
    getLogin,
    postLogin,
    getRegister,
    postRegister,
    getProfile,
    logout
};
