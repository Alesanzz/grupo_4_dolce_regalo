const productsController = {}
const { request, response } = require('express');
const modelProduct = require('../../database/models')
productsController.getAll = async(req = request, res = response) => {
    try {
        const { page, size } = req.query;
        console.log(page, size);
        let pages = page
        let allProducts = await modelProduct.Product.findAndCountAll({
            include: ["Category", "Season"],
            order: [
                ["sku", "ASC"]
            ],

            limit: parseInt(size),
            offset: parseInt(pages) * parseInt(size)
        })
        if (allProducts.rows.length > 0) {
            res.json({
                response: true,
                products: allProducts,
                amount: allProducts.length
            })
        } else {
            res.status(400).json({
                response: true,
                message: 'No hay productos disponibles',
                products: allProducts,
            })
        }
    } catch (error) {
        res.status(500).json({
            response: false,
            message: 'Error de servidor'
        })
    }
}
productsController.getById = async(req = request, res = response) => {
    try {
        let sku = req.params.sku;
        let productId = await modelProduct.Product.findByPk(sku, { include: ["Category", "Season"] })
        if (productId === null) {
            res.status(400).json({
                response: true,
                message: `No hay producto con el id ${sku}`
            })
            return;

        }
        res.json({
            response: true,
            product: productId
        })
    } catch (error) {
        res.status(500).json({
            response: false,
            message: 'Error de servidor'
        })
    }
}

module.exports = productsController;