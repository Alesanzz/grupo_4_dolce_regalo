const productsModel = require("../models/products.model");
const homeController = {
    index: function(req, res) {
        let catgoriesName = productsModel.all().map(value => value.category)
        let uniqs = catgoriesName.filter(function(item, index, array) {
            return array.indexOf(item) === index;
        })
        return res.render("home", { data: uniqs });
    }
}


module.exports = homeController;