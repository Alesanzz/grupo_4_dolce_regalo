const { resolve } = require('path');
const { existsSync, mkdirSync } = require('fs');
const destination = (req, file, cb) => {
        let folder = resolve(__dirname, '..', '..', 'public', 'products');
        if (!existsSync(folder)) {
            mkdirSync(folder)
        }
        return cb(null, folder)
    }
    // const filename = (req, file, cb)=>{
    //     let unique = Date.now() + 
    //     // let name = file.fieldname + '-' + unique;
    //     return cb(null,name);
    // }

module.exports = destination