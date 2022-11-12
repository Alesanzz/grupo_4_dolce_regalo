const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verify-token')
const productsController = require('../controllers/products.controller')
router.get('/all', verifyToken, productsController.getAll)
router.get('/:sku', verifyToken, productsController.getById)

module.exports = router