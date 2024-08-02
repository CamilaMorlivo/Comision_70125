const { Router } = require('express')

//import {Router} from 'express'

//el constructor hace lo mismo que una clase que empieza en mayus
const router = Router() // -> funcion que empieza en mayus

//configuracion
router.get('/', (req, res) => {
    res.send('get products')
})


module.exports = router
//export default router
//export router