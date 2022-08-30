const express = require("express");
const router = express.Router();
const controller = require("../controllers/home.controller");
const infoController = require('../controllers/info.controller');


router.get("/", controller.index);
router.get("/informacion", infoController.get);
module.exports = router;