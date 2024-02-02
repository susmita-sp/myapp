const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');

mongoose.connect('mongodb://localhost:27017/ecommerce', {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();
app.use(bodyParser.json());
app.use('/products', productRoutes);

app.listen(3000, () => console.log('Server started'));

module.exports = app; // Export for testing