const { request, response } = require('express');
const path = require("path");
const registerController = {};

registerController.get = (req = request, res = response) => {
    try {
        res.render('register');
    } catch (error) {
        res.status(500).send('error de servidor')
    }
}

module.exports = registerController