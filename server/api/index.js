const express = require('express');

const router = express();

const categories = require('./categories');

router.use('/categories', categories);

module.exports = router;