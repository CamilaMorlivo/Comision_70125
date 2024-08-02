const fs = require('fs');

/*Debe tener un método addProduct el cual debe 
recibir un objeto con el formato previamente especificado, 
asignarle un id autoincrementable y guardarlo en el arreglo 
(recuerda siempre guardarlo como un array en el archivo). 

title: “producto prueba”
description:”Este es un producto prueba”
price:200,
thumbnail:”Sin imagen”
code:”abc123”,
stock:25

*/

class ProductManagger{
    constructor(path){
        this.path = path;
    }

    async crearProducto(producto){
        if(!producto.title ||
            !producto.description ||
            !producto.price ||
            !producto.thumbnail ||
            !producto.code ||
            !producto.stock
        ){
            return console.log("Producto incompleto!")
        }

        const nuevoProducto = {
            title: producto.title,
            descripction: producto.description,
            price: producto.price,
            thumbnail: "Sin imagen",
            code: i++, 
            stock: producto.stock
        };
        const productos = await this.addProduct();
        productos.push(nuevoProducto);
    
    }

    async addProduct(){
        try {
            const result = await fs.promises.readFile(this.path, 'utf-8')
            const products = JSON.parse(result);
            return products
        } catch (error) {
            return []
        }
    }

    async getProducts(){
        
    }
}