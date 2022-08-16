const { request, response } = require('express');
const infoController = {};

infoController.get = (req = request, res = response) => {
    try {
        // console.log(dataProducts);
        res.render('info')
    } catch (error) {
        res.status(500).send('error de servidor')
    }
}

module.exports = infoController;