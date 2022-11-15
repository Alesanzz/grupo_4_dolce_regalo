const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verify-token')
const productsController = require('../controllers/products.controller')
const validadorParaProducto = require("../validation/validacion.product");

router.get('/all', verifyToken, productsController.getAll)
router.get('/:sku', verifyToken, productsController.getById)
router.post('/create', [verifyToken, validadorParaProducto], productsController.create)
router.delete('/delete/:sku', verifyToken, productsController.delete)

module.exports = router