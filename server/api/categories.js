const express = require('express');

const router = express();
const { checkAuthHeaderSetUserUnAuthorized } = require('../middlewares')
const categories = require('../queries/category');

router.get('/', async (req, res, next) => {
  try {
    const allCategories = await categories.getAll(req.body);
    res.json(allCategories);
  } catch (error) {
    next(error);
  }
});

router.post('/',
  checkAuthHeaderSetUserUnAuthorized,
  isAdmin,
  async (req, res, next) => {
  try {
    const category = await categories.insert(req.body);
    res.json(category);
  } catch (error) {
    next(error);
  }
});

module.exports = router;