const { Router } = require('express');
const uploadRouters = Router();
const verifyToken = require('../middlewares/verify-token')
const fileUpload = require('express-fileupload');
const controllerUploadFile = require('../controllers/upload-file.controller')

uploadRouters.use(fileUpload())
uploadRouters.put('/images/:tipo/:id', verifyToken, controllerUploadFile.upload);
// router.get('/:tipo/:foto', verifyToken, controllerUploadFile.getAllSeason);

module.exports = uploadRouters