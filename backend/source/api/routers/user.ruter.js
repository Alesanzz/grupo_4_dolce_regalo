const express = require('express');
const router = express.Router();
const controllerRegister = require("../controllers/register.controller")
const controllerLogin = require("../controllers/login.controller")
    //requiriendo todas las validaciones
const validadorParaRegistrarse = require("../../validation/auth/validacion.register");
const validadorParaLogin = require("../../validation/auth/validacion.login");

const verifyToken = require('../middlewares/verify-token')
router.get('/users/register', verifyToken, controllerRegister.get)
router.post('/users/register', validadorParaRegistrarse, controllerRegister.post)
router.post('/users/login', validadorParaLogin, controllerLogin.post)

module.exports = router