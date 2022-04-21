const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UserController');

router.get('/login', userController.login);
router.get('/register', (req, res) => res.send('Register'));
module.exports = router;