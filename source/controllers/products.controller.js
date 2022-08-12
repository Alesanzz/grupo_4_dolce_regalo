const { request, response } = require('express');
const path = require("path");
const productController = {};
const dataProducts = require('../data/products.json')
productController.get = (req = request, res = response) => {
    try {
        console.log(dataProducts);
        res.render('product', { data: dataProducts })
    } catch (error) {
        res.status(500).send('error de servidor')
    }
}

module.exports = productController