const express = require("express");
const route = express.Router();
const controller = require("../controllers/home.controller");

route.get("/home", controller.index);

module.exports = route;