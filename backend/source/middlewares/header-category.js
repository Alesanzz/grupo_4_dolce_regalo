const db = require("../database/models");

const productsModel = require("../models/products.model");

let headerCategory = async function (req, res, next) {
    // try {
    //     let categoriesName = await db.Category.findAll()



    //     res.locals.categories = categoriesName
    // } catch (error) {
    //     return res.send(error)
    // }
    let catgoriesName = productsModel.all().map(value => value.category)
    let data = catgoriesName.filter(function(item, index, array) {
        return array.indexOf(item) === index;
    })
    let listCategory = data.length > 1 ? data : [];
    res.locals.categories = listCategory
    return next()
}

module.exports = headerCategory