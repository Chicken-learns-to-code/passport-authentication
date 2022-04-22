const express = require('express');
const route = express.Router();
const productController = require('../app/controllers/ProductController');

route.get('/all', productController.index);

module.exports = route;