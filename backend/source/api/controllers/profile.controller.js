const controllerProfile = {};
const { validationResult } = require("express-validator");
const model = require("../../database/models");

controllerProfile.post = async(req, res) => {

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
        const errores = validationResult(req);
        if (!errores.isEmpty()) {
            res.status(400).json({
                response: false,
                errors: errores.mapped()
            });
            return;
        }
        let newUser = await userId.update({
            ...req.body,
            phone: Number(req.body.phone),
            country: req.body.pais,
        });

        res.json({
            response: true,
            newUser,
            message: "Usuario actualizado correctamente"
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Error de servidor'
        })
    }
}


module.exports = controllerProfile