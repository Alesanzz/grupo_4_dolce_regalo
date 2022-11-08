const { request, response } = require('express')
const controllerLogin = {};
const bcrypt = require("bcrypt");
const model = require("../../database/models");
const { validationResult } = require("express-validator");
const validDomainEmail = require('../../utils/valid-domain-email');
const { getJwtToken } = require('../jwt/config');

controllerLogin.post = async(req, res) => {
    try {
        const errores = validationResult(req);
        if (!errores.isEmpty()) {
            res.status(400).json({
                response: false,
                errors: errores.mapped()
            });
        }

        const userLogged = await model.User.findOne({
            where: {
                email: req.body.email,
            },
        });

        const token = getJwtToken({ userLogged })
        res.json({
            response: true,
            token
        })
    } catch (error) {
        res.status(500).json({
            response: false
        })
    }
}

module.exports = controllerLogin