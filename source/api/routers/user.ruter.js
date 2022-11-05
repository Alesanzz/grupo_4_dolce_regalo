const express = require('express');
const router = express.Router();
const controllerRegister = require("../controllers/register.controller")

router.get('/register', controllerRegister.get)
router.post('/register', controllerRegister.post)

module.exports = router