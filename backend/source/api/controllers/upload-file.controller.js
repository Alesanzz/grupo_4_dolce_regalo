const controllerUploadFile = {}
const { v4: uuid } = require('uuid');
const path = require('path');
const fs = require('fs');
const updatePhoto = require('../../utils/update-photo');


controllerUploadFile.upload = (req, res) => {
    try {
        const tipo = req.params.tipo;
        const id = req.params.id;

        const tiposValidos = ['usuarios', 'productos'];

        if (!tiposValidos.includes(tipo)) {
            return res.status(400).json({
                success: false,
                message: 'No es usuario / producto / categoria'
            })
        }


        //Validar que exita la imagen
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({
                success: false,
                message: 'No hay ningun archivo'
            })
        }

        //procesar imagen
        const file = req.files.photo;
        const nombreCortado = file.name.split('.');
        const extensionArchivo = nombreCortado[nombreCortado.length - 1];
        // validar extension
        const extensionesValidad = ['png', 'jpg', 'jpeg', 'gif'];
        if (!extensionesValidad.includes(extensionArchivo)) {
            return res.status(400).json({
                success: false,
                message: 'No es una extension permitida'
            })
        }
        //nombre del archivo
        const nombreArchivo = `${uuid()}.${extensionArchivo}`;
        //path para guardar la imagen
        const path = `./upload/${tipo}/${nombreArchivo}`;
        //mover imagen
        console.log(nombreArchivo, path);
        file.mv(path, (err) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error al mover la imagen'
                })
            }
            //Actualizar base de datos
            updatePhoto(tipo, id, nombreArchivo)
            res.json({
                success: true,
                nombreArchivo,
                message: 'Imagen subida'
            })
        })



    } catch (error) {

    }
}


module.exports = controllerUploadFile