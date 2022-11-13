const controllerCategorySeason = {};
const model = require('../../database/models')


controllerCategorySeason.getAllCategory = async(req, res) => {
    try {
        let categories = await model.Category.findAll({});
        if (categories.length > 0) {
            res.json({
                response: true,
                categories
            })
        } else {
            res.json({
                response: true,
                message: 'No hay categorias disponibles',
                categories
            })
        }
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Error de servidor'
        })
    }
}
controllerCategorySeason.getAllSeason = async(req, res) => {
    try {
        let season = await model.Season.findAll({});
        if (season.length > 0) {
            res.json({
                response: true,
                season
            })
        } else {
            res.json({
                response: true,
                message: 'No hay temporadas disponibles',
                season
            })
        }
        console.log(season);
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Error de servidor'
        })
    }
}



module.exports = controllerCategorySeason;