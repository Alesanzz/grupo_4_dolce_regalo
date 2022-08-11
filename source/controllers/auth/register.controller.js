const fs = require("fs");
const path = require("path");
const usersModel = require("../../models/auth/users.model");



const registerController = {
    create: function (req, res) {
        return res.render("register");
      },

    save: function (req, res)  {
        if (req.body.image && req.files.length > 0) {
            req.body.image = req.files[0].filename
        }else{
            req.body.image = "default-user-image.png"
        }

        let nuevo = usersModel.generate(req.body);
        let todos = usersModel.all();
        todos.push(nuevo);
        usersModel.write(todos);
        return res.redirect("/login");
        }
    }




module.exports = registerController