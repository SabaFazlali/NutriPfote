const express = require('express');
const path = require('path');
const apiRoutes = require('./src/routes/apiRoutes');
const viewRoutes = require('./src/routes/viewRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', apiRoutes);
app.use('/', viewRoutes);

// Test route as requested in Stage 1
app.get('/ping', (req, res) => {
    res.send('pong');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
