const fs = require("fs");
const path = require("path");
const expressValidator = require("express-validator");
const usersModel = require("../../models/auth/users.model");

const registerController = {
    create: function(req, res) {
        return res.render("register");
    },

    save: function(req, res) {
        // Control de las validaciones
        const result = expressValidator.validationResult(req);
        if (!result.isEmpty()) {
            // El mapped hace mas legible los errores para Java
            let errores = result.mapped();
            return res.render("register", {
                errores: errores,
                data: req.body,
            });
        }

        // Si pasamos las validaciones, ocurre lo siguiente:
        if (req.body && req.files.length > 0) {
            req.body.image = req.files[0].filename;
        } else {
            req.body.image = "default-user-image.png";
        }

        let nuevo = usersModel.generate(req.body);
        let todos = usersModel.all();
        todos.push(nuevo);
        usersModel.write(todos);
        return res.redirect("/login");
    },

    login: function(req, res) {
        return res.render("login");
    },

    access: function(req, res) {
        // Control de las validaciones
        const result = expressValidator.validationResult(req);
        console.log('MESSI', result);
        if (!result.isEmpty()) {
            // El mapped hace mas legible los errores para Java
            let errores = result.mapped();
            return res.render("login", {
                errores: errores,
                data: req.body,
            });
        }

        res.cookie("user", req.body.email, { maxAge: 1000 * 60 * 60 });
        let all = usersModel.all();
        req.session.user = all.find((user) => user.email == req.body.email);
        return res.redirect("/");
    },

    logout: function(req, res) {
        delete req.session.user;
        res.cookie("user", null, { maxAge: -1 });
        return res.redirect("/");
    },
};

module.exports = registerController;