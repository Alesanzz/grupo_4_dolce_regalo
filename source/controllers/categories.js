const { request, response } = require('express')
const categorieController = {
    all: function(req = request, res = response) {
        return res.render("categories");
    }
}


module.exports = categorieController;