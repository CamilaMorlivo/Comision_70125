/*
CON PARAMETROS
import express from 'express'

const app = express()

app.use(express.urlencoded({extended:true}))


const users = [
    {id: "1", nombre: "Fernando", apellido: "Goirundo", genero: 'F'},
    {id: "2", nombre: "Fernanda", apellido: "Goirundo", genero: 'M'},
    {id: "3", nombre: "Gaston", apellido: "Morlivo", genero: 'TM'},
    {id: "4", nombre: "Sofia", apellido: "Gomezx", genero: 'FQ'},
    {id: "5", nombre: "Camila", apellido: "Domingo", genero: 'F'},
    {id: "6", nombre: "Sergio", apellido: "Argentina", genero: 'M'}
]

app.get('/usuario/:genero', (req, res) => {
    const genero = req.params.genero; 

    if(!genero){
        return users;
    }
    if(genero.toUpperCase() != 'M' && genero.toUpperCase() !== 'F' && genero.toUpperCase() !== 'TM' && genero.toUpperCase() !== 'FQ'){
        return res.send({users})
    }

    const usuariosFiltrados = users.filter(user => user.genero === genero)
    res.send({users: usuariosFiltrados})
})

app.listen(8080, () => {
    console.log("Escuchando")
})
*/


//ahora con query
import express from 'express'

const app = express()

app.use(express.urlencoded({extended:true}))


const users = [
    {id: "1", nombre: "Fernando", apellido: "Goirundo", genero: 'F'},
    {id: "2", nombre: "Fernanda", apellido: "Goirundo", genero: 'M'},
    {id: "3", nombre: "Gaston", apellido: "Morlivo", genero: 'TM'},
    {id: "4", nombre: "Sofia", apellido: "Gomezx", genero: 'FQ'},
    {id: "5", nombre: "Camila", apellido: "Domingo", genero: 'F'},
    {id: "6", nombre: "Sergio", apellido: "Argentina", genero: 'M'}
]

app.get('/usuario_query', (req, res) => {
    const genero = req.query.genero; 

    if(!genero){
        return users;
    }
    if(genero.toUpperCase() != 'M' && genero.toUpperCase() !== 'F' && genero.toUpperCase() !== 'TM' && genero.toUpperCase() !== 'FQ'){
        return res.send({users})
    }

    const usuariosFiltrados = users.filter(user => user.genero === genero)
    res.send({users: usuariosFiltrados})
})

app.listen(8080, () => {
    console.log("Escuchando")
})

