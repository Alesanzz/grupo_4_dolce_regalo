const fs = require("fs");
const path = require("path");

const homeController = {
    index: function(req = request, res = response) {
        return res.render("home-views/home");
    },

    information: function(req = request, res = response) {
        return res.render("home-views/information");
    },

    contact: function(req = request, res = response) {
        return res.render("home-views/contact");
    },

    categories: function(req = request, res = response) {
        return res.render("home-views/categories");
    }
}


module.exports = homeController;