const { getCompareToken } = require('../jwt/config')
const verifyToken = async(req, res, next) => {
    try {
        const userToken = req.get('x-token') || '';
        const comparation = await getCompareToken(userToken);
        req.usuario = comparation.usuario;
        next()

    } catch (error) {
        console.log('token incorrecto', error);
        res.json({ success: false, message: 'token incorrecto / expirado' })
    }
}

module.exports = verifyToken;