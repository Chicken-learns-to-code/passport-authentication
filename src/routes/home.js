const express = require('express');
const route = express.Router();
const homController = require('../app/controllers/HomeCotroller');
const { forwardAuthenticated , ensureAuthenticated } = require('../config/auth');
route.get('/', ensureAuthenticated ,homController.index);

module.exports = route;