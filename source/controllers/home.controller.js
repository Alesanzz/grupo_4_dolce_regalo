const productsModel = require("../models/products.model");
const { request, response } = require('express')
const homeController = {
    index: function(req = request, res = response) {
        return res.render("home");
    }
}


module.exports = homeController;