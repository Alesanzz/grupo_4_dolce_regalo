const { request, response } = require('express')
const controllerRegister = {};
const bcrypt = require("bcrypt");
const model = require("../../database/models");
const { validationResult } = require("express-validator");
const validDomainEmail = require('../../utils/valid-domain-email');
const { getJwtToken } = require('../jwt/config')
controllerRegister.get = async(req = request, res = response) => {
    try {
        let users = await model.User.findAndCountAll({})
        if (users.rows.length > 0) {
            res.json({
                response: true,
                users: users.rows,
                count: users.count,
            })
        } else {
            res.status(400).json({
                response: false,
                message: 'No hay usuarios registrados'
            })

        }

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Error de servidor'
        })
    }
}
controllerRegister.getById = async(req = request, res = response) => {
    try {
        let id = req.params.id;
        const userId = await model.User.findByPk(id);
        if (!userId) {
            res.json({
                response: false,
                message: `El usuario con id ${id} no existe`
            })
            return;
        }
        res.json({
            response: true,
            userId,
            message: "Usuario encontrado"
        })


    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Error de servidor'
        })
    }
}
controllerRegister.post = async(req = request, res = response) => {
    try {
        let admin = validDomainEmail(req.body);
        const errores = validationResult(req);
        if (!errores.isEmpty()) {
            res.status(400).json({
                response: false,
                errors: errores.mapped(),
                admin
            });
        }

        const newUser = {
            name: req.body.name,
            lastname: req.body.lastname,
            phone: Number(req.body.phone),
            country: req.body.country,
            email: req.body.email,
            // Para encriptar una contraseña, se debe utilizar "bcrypt.hashSync"
            password: bcrypt.hashSync(req.body.password, 10),
            admin,
        }
        let userCreate = await model.User.create(newUser);
        const token = getJwtToken({ userCreate })
        res.json({
            response: true,
            message: "Usuario creado correctamente",
            userCreate,
            token
        })
    } catch (error) {
        res.status(500).json({
            response: false,
        })
    }
}


module.exports = controllerRegister