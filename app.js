const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// Import routes
const errorRoutes = require('./controllers/error');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Assign routes
app.use(shopRoutes);
app.use('/admin', adminRoutes);

app.use(errorRoutes.get404);

app.listen(3000);