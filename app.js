const express = require('express');
const app = express();

const ProductRoutes = require('./Routes/product');

app.use('/product',ProductRoutes);
 
module.exports = app;