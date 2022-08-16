const express = require("express");
const router = express.Router();

const infoController = require('../controllers/info.controller')

router.get("/informacion", infoController.get);

module.exports = router;