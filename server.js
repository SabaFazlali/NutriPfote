const express = require('express');
const path = require('path');
const apiRoutes = require('./src/routes/apiRoutes');
const viewRoutes = require('./src/routes/viewRoutes');

const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'nutripfote-secret-key-123',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false, // Set to true if using https
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// Make user session available in all templates
app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});

// Routes
app.use('/api', apiRoutes);
app.use('/', viewRoutes);

// API Documentation
app.get('/api-docs', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/api-docs.yaml'));
});

// Test route as requested in Stage 1
app.get('/ping', (req, res) => {
    res.send('pong');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
