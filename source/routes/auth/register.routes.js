const express = require('express');
const router = express.Router();
const registerController = require('../../controllers/auth/register.controller')
router.get('/register', registerController.get)
router.post('/register', registerController.post)

module.exports = router;