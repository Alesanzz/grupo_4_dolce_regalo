const { request, response } = require('express')
const controllerRegister = {}
const model = require("../../database/models")
controllerRegister.get = async(req = request, res = response) => {
    try {
        let users = await model.User.findAll({})
        if (users.length > 0) {
            res.json({
                response: true,
                users
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
controllerRegister.post = (req = request, res = response) => {
    try {
        res.json({
            ok: true,
            data: req.body
        })
    } catch (error) {
        res.status(500).json({
            ok: true
        })
    }
}


module.exports = controllerRegister