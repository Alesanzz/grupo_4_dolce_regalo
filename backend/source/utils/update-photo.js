const fs = require('fs');
const model = require("../database/models");

const updatePhoto = async(tipo, id, nombreArchivo) => {
    switch (tipo) {
        case 'usuarios':
            const userId = await model.User.findByPk(id);
            if (!userId) {
                return false;
            }
            console.log('user', userId);
            const pathViejo = `./dist/uploads/usuarios/${userId.photo}`;
            if (fs.existsSync(pathViejo)) {
                fs.unlinkSync(pathViejo);
            }
            let img = nombreArchivo;
            await model.User.update({
                avatar: img
            })
            return true;
    }
}


module.exports = updatePhoto