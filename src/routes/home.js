const express = require('express');
const route = express.Router();
const homController = require('../app/controllers/HomeCotroller');

route.get('/',homController.index);

module.exports = route;