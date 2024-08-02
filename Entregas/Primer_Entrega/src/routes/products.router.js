const {Router}  = require('express')
const router    = Router()
const productos = []

//1.Crear una ruta GET que debera listar todos los productos de la base []
router.get('/', (peticion, respuesta) => {
    respuesta.send({data: productos})
})

//2.Crear una ruta GET/:uid que debera traer solo un producto
router.get('/:id', (peticion, respuesta) => {
    const {id}      = peticion.params
    const producto  = productos.filter(producto => producto.id == Number(id))
    respuesta.send(producto)
})

//3.Crear una ruta POST que agregara un nuevo producto a la base 
router.post('/', (peticion, respuesta) => {
    
    const { body } = peticion

    if( !body.title         ||
        !body.description   ||
        !body.code          ||
        !body.price         || 
        !body.stock         ||
        !body.category    
    ){
        return respuesta.status(400).send({status: 'error', error: 'Faltan datos.' })
    } 

    if( !Number.isInteger(body.price) || !Number.isInteger(body.stock)){
        return respuesta.status(400).send({status: 'error', error: 'El tipo de dato es incorrecto.'})
    }

    productos.push({ id: productos.length + 1, ...body, status: true})
    respuesta.status(200).send({data:productos})
})

//4.Crear una ruta PUT/:uid para tomar un producto y actualizarlo con los campos enviados desde el body. 
router.put('/:id', (peticion, respuesta) => {
    
    const { body }   = peticion
    const { id }     = peticion.params
    const prodIndex  = productos.findIndex(prod => prod.id == Number(id))
    console.log(prodIndex)
    console.log(id)
    console.log(body)

    if(prodIndex === -1){
        return respuesta.status(404).send({status: 'error', error: 'El producto no fue encontrado.'})
    }

    const updateProd = {
        id,
        ...body,
        status: true
    }

    productos[prodIndex] = updateProd

    return respuesta.status(200).json(updateProd)

})

//5.Crear una ruta DELETE/:uid que debera eliminar el producto con el uid indicado.
router.delete('/:id', (peticion, respuesta) => {
    const {id}          = peticion.params
    const nuevaLista    = productos.filter(producto => producto.id != Number(id))
    respuesta.send(nuevaLista)
})


module.exports = router