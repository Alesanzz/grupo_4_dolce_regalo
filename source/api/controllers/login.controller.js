const { request, response } = require('express')
const controllerLogin = {};
const bcrypt = require("bcrypt");
const model = require("../../database/models");
const { validationResult } = require("express-validator");
const validDomainEmail = require('../../utils/valid-domain-email');
const { getJwtToken } = require('../jwt/config');

controllerLogin.post = async(req, res) => {
    try {
        const userLogged = await model.User.findOne({
            where: {
                email: req.body.email,
            },
        });
        if (!userLogged) {
            res.json({
                response: false,
                message: 'Usuario no existe'
            })
        }
        // if (!userLogged.validPassword(password)) {
        //     console.log('pw passowrd');
        // }
        res.json({
            response: true,
            userLogged
        })
    } catch (error) {
        res.status(500).json({
            response: false
        })
    }
}

module.exports = controllerLogin