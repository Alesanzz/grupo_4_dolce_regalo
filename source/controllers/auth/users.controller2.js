const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const db = require("../../database/models");
const expressValidator = require("express-validator");

const userController = {
    create: function(req, res) {
        return res.render("users-views/register");
    },

    save: function(req, res) {
        // Control de las validaciones
        const result = expressValidator.validationResult(req);
        if (!result.isEmpty()) {
            // El mapped hace mas legible los errores para Java
            let errores = result.mapped();
            return res.render("users-views/register", {
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

        const save = db.User.create({
            name: req.body.name,
            lastname: req.body.lastname,
            phone: Number(req.body.phone),
            country: req.body.country,
            email: req.body.email,
            // Para encriptar una contraseña, se debe utilizar "bcrypt.hashSync"
            password: bcrypt.hashSync(req.body.password, 10),

            avatar: req.body.image,
        });
        const success = (data) => res.redirect("/login");
        const error = (error) => res.send(error);

        return save.then(success).catch(error);
    },

    login: function(req, res) {
        return res.render("users-views/login");
    },

    access: async function(req, res) {
        try {
            // Control de las validaciones
            const result = expressValidator.validationResult(req);
            if (!result.isEmpty()) {
                // El mapped hace mas legible los errores para Java
                let errores = result.mapped();
                return res.render("users-views/login", {
                    errores: errores,
                    data: req.body,
                });
            }

            res.cookie("user", req.body.email, { maxAge: 1000 * 60 * 60 });

            const userLogged = await db.User.findOne({
                where: {
                    email: req.body.email,
                },
            });

            req.session.user = userLogged;
            return res.redirect("/");
        } catch (error) {
            return res.send(error);
        }
    },

    logout: function(req, res) {
        delete req.session.user;
        res.cookie("user", null, { maxAge: -1 });
        return res.redirect("/");
    },

    myprofile: function(req, res) {
        return res.render("users-views/profile");
    },

    edit: function(req, res) {
        const userToEdit = db.User.findByPk(req.params.sku);
        const success = (usuario) =>
            res.render("users-views/profile-edit", { usuario });
        const error = (error) => res.send(error);

        return userToEdit.then(success).catch(error);
    },

    update: async function(req, res) {
        // Control de las validaciones
        const result = expressValidator.validationResult(req);
        if (!result.isEmpty()) {
            // El mapped hace mas legible los errores para Java
            let errores = result.mapped();
            return res.render("users-views/profile-edit", {
                errores: errores,
                data: req.body,
            });
        }
        // Si pasamos las validaciones, ocurre lo siguiente:
        try {
            const usuarioAEditar = await db.User.findByPk(req.body.sku);

            if (req.files && req.files.length > 0) {
                req.body.avatar = req.files[0].filename;
            } else {
                req.body.avatar = usuarioAEditar.image;
            }

            await usuarioAEditar.update({
                ...req.body,
                phone: Number(req.body.phone),
                password: bcrypt.hashSync(req.body.password, 10),
            });
            return res.redirect("/profile/:sku");
        } catch (error) {
            return res.send(error);
        }
    },

    destroy: async function(req, res) {
        try {
            let usuarioAEliminar = await db.User.findByPk(req.body.sku);
            //para que se eliminen las imagenes
            if (usuarioAEliminar.avatar != "default-user-image.png") {
                let file = path.resolve(
                    __dirname,
                    "..",
                    "..",
                    "..",
                    "public",
                    "images",
                    "users",
                    usuarioAEliminar.avatar
                );
                fs.unlinkSync(file);
            }
            //para eliminar los datos
            const remove = await usuarioAEliminar.destroy();
            return res.redirect("/");
        } catch (error) {
            return res.send(error);
        }
    },
};

module.exports = userController;