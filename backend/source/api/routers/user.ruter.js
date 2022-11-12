const express = require('express');
const router = express.Router();
const controllerRegister = require("../controllers/register.controller")
const controllerLogin = require("../controllers/login.controller")
const controllerProfile = require("../controllers/profile.controller")
    //requiriendo todas las validaciones
const validadorParaRegistrarse = require("../../validation/auth/validacion.register");
const validadorParaLogin = require("../../validation/auth/validacion.login");
const validadorParaActualizar = require("../../validation/auth/validacion.update")
const verifyToken = require('../middlewares/verify-token')
router.get('/register', verifyToken, controllerRegister.get)
router.get('/:id', verifyToken, controllerRegister.getById)
router.post('/register', validadorParaRegistrarse, controllerRegister.post)
router.post('/login', validadorParaLogin, controllerLogin.post)
router.post('/update/:id', [verifyToken, validadorParaActualizar], controllerProfile.post)

module.exports = router