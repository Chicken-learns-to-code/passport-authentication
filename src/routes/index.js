const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('body'));

module.exports = router;