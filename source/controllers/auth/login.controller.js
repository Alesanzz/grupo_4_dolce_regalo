const { request, response } = require('express');
const path = require("path");
const loginController = {};

loginController.get = (req = request, res = response) => {
    try {
        res.render('login')
    } catch (error) {
        res.status(500).send('error de servidor')
    }
}

module.exports = loginController