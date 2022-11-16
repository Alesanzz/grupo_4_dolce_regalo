const controllerCategorySeason = {};
const model = require('../../database/models')


controllerCategorySeason.getAllCategory = async(req, res) => {
    try {
        let categories = await model.Category.findAndCountAll({});
        if (categories.rows.length > 0) {
            res.json({
                response: true,
                categories: categories.rows,
                count: categories.count
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
controllerCategorySeason.getCategoryById = async(req, res) => {
    try {
        let sku = req.params.skucategory;
        let categoryId = await model.Category.findByPk(sku)
        if (categoryId === null) {
            res.status(400).json({
                response: true,
                message: `No hay categoria con el id ${sku}`
            })
            return;
        }
        res.json({
            response: true,
            category: categoryId
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Error de servidor'
        })
    }
}
controllerCategorySeason.getAllSeason = async(req, res) => {
    try {
        let season = await model.Season.findAndCountAll({});
        if (season.rows.length > 0) {
            res.json({
                response: true,
                season: season.rows,
                count: season.count
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