const homeModel = require("../models/home.model");

const controller = {
  index: function (req, res) {
    return res.render("home");
  }}


module.exports = controller;
