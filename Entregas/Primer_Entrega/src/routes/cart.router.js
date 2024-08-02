const {Router}  = require('express')
const router    = Router()
let carritos    = []

//1.Crear una ruta POST que debera agregar un nuevo carrito con la siguiente estructura:
router.post('/', (peticion, respuesta) => {
    
    const { body }  = peticion
    const prods     = body.productos
    let productos   = []

    if(!body.productos){
        return respuesta.status(400).send({status: 'error', error: 'Faltan datos.'})
    } 

    for (let i = 0; i < prods.length; i++) {      

        if(!Number.isInteger(prods[i])){
            return respuesta.status(400).send({status: 'error', error: 'Los datos son incorrectos.'})
        }

        let producto = new Producto(prods[i], 1)

        productos.push(producto)
   
    }

    carritos.push({ id: carritos.length + 1, productos})

    const carritoCompleto = carritos

    respuesta.status(200).send({carritos:carritoCompleto})
})

//2.Crear una ruta GET/:id que debera obtener los productos que pertenezcan al carrito con el parametro cid
router.get('/:id', (peticion, respuesta) => {
    const {id}     = peticion.params
    const carrito  = carritos.filter(carrito => carrito.id == Number(id))
    respuesta.send(carrito)
})

//3.Crear una ruta POST/:cid/product/:pid que debera agregar el producto al arreglo "products" del carrito seleccionado, agregandose como un objeto
class Producto{
    constructor(id, cant){
        this.id         = id
        this.quantity   = cant
    }
}

class Carrito{
    constructor(id, productos){
        this.id         = id
        this.productos  = productos
    }
}

router.post('/:cid/product/:pid', (peticion, respuesta) => {

    const {cid}     = peticion.params
    const {pid}     = peticion.params
    const cIndex    = carritos.findIndex(c => c.id == Number(cid))

    if(cIndex == -1){
        return respuesta.status(404).send({status: 'error', error: 'El carrito no existe.'})
    }

    const pIndex = carritos[cIndex].productos.findIndex(p => p.id == Number(pid))

    if(pIndex != -1 ){

        carritos[cIndex].productos[pIndex].quantity++      

    }else{

        const newProduct = new Producto(Number(pid), 1)
        carritos[cIndex].productos.push(newProduct)

    }

    respuesta.status(200).send({carritos:carritos})

})


/*STOCK DE PRODUCTOS*/

const panLactal     = new Producto(11, 2)
const docenaHuevos  = new Producto(28, 1)
const naranjas      = new Producto(22, 4)
const bananas       = new Producto(16, 4)
const milanesas     = new Producto(15, 8)
const arroz         = new Producto(16, 3)
const fideos        = new Producto(27, 2)
const coca          = new Producto(68, 2)
const galletitas    = new Producto(19, 2)
const yerba         = new Producto(10, 4)

const carrito1 = new Carrito(1, [panLactal, docenaHuevos])
const carrito2 = new Carrito(2, [coca,arroz,fideos])
const carrito3 = new Carrito(3, [galletitas, bananas, naranjas])
const carrito4 = new Carrito(4, [yerba, galletitas])
const carrito5 = new Carrito(5, [milanesas])

carritos = [carrito1, carrito2, carrito3, carrito4, carrito5]

module.exports = router