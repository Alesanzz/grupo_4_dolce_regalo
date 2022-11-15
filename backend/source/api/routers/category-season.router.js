const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verify-token')

const controllerCategorySeason = require('../controllers/category-season.controller')
router.get('/category/all', verifyToken, controllerCategorySeason.getAllCategory);
router.get('/category/:skucategory', verifyToken, controllerCategorySeason.getCategoryById);
router.get('/season/all', verifyToken, controllerCategorySeason.getAllSeason);

module.exports = router