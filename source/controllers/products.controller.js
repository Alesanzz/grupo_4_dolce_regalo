const { request, response } = require('express');
const path = require("path");
const productController = {};
const dataProducts = require('../data/products.json')
productController.get = (req = request, res = response) => {
    try {
        // console.log(dataProducts);
        res.render('product', { data: dataProducts })
    } catch (error) {
        res.status(500).send('error de servidor')
    }
}
productController.getById = (req = request, res = response) => {
    try {
        let sku = parseInt(req.params.id)

        let productDetail = dataProducts.filter((value) => value.sku === sku);
        console.log(productDetail, sku);
        res.render('product-detail', { product: productDetail })
    } catch (error) {
        res.status(500).send('error de servidor')
    }
}

module.exports = productController