//requerimientos basicos
const express = require("express");
const router = express.Router();

const path = require("path");
const fs = require("fs");

const controller = require("../controllers/home.controller");

//rutas de todo el controlador
router.get("/", controller.index);
router.get("/information", controller.information);
router.get("/contact", controller.contact);
router.get("/categories", controller.categories);

module.exports = router;
