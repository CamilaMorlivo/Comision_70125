const multer = require('multer')
const {dirname} = require('node:path')

//metodo que va a ayudarme a crear archivos en mi servidor local,
//ordenador, disco, etc
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        //__dirname porque la quiero gaurdar en public
        callback(null, dirname(__dirname) + '/public/img')
    },
    filename: (req, file, callback) => {
        callback(null, `${Date.now()}-${file.originalname}`)
    }
}) 


const uploader = multer({
    storage
})

module.exports = {
    uploader
}