const productsModel = require("../models/products.model");
const { request, response } = require('express')

let headerCategory = (req = request, res = response, next) => {

    let catgoriesName = productsModel.all().map(value => value.category)
    let data = catgoriesName.filter(function(item, index, array) {
        return array.indexOf(item) === index;
    })
    let listCategory = data.length > 1 ? data : [];
    res.locals.categories = listCategory
    return next()
}

module.exports = headerCategory