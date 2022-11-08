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
            return;
        }

        const userLogged = await model.User.findOne({
            where: {
                email: req.body.email,
            },
        });
        console.log(userLogged.dataValues, 'ok');
        const { password, ...object } = userLogged.dataValues;
        const token = getJwtToken({ userLogged })
        res.json({
            response: true,
            token,
            user: object
        })
    } catch (error) {
        if (error.original !== undefined) {
            if (error.original.code === "ECONNREFUSED") {
                res.status(500).json({
                    response: false,
                    message: "Error de conexion con la base de datos"
                })
                return;
            }
        }
        res.status(500).json({
            response: false,
            message: "Error de servidor"
        })
    }
}

module.exports = controllerLogin