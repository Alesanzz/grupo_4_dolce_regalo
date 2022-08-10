const express = require("express");
const router = express.Router();

const loginController = require("../../controllers/auth/login.controller");

router.get("/login", loginController.get);

module.exports = router;