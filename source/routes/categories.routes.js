//requerimientos basicos
const express = require("express");
const router = express.Router();
const categorieController = require('../controllers/categories')
    //rutas donde se crean productos
router.get("/categories", categorieController.all);


module.exports = router;