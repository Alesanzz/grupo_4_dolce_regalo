const { request, response } = require('express');
const infoController = {};
const headerCategory = require("../middlewares/header-category");
infoController.get = (req = request, res = response) => {
    try {
        // console.log(dataProducts);
        headerCategory
        res.render('info')
    } catch (error) {
        res.status(500).send('error de servidor')
    }
}

module.exports = infoController;