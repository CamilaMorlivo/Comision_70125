import express from 'express'
const PORT = 8080
const app = express()

app.use(express.urlencoded({extended:true}))

const usuarios = [
    {id: "1", nombre: "Fernando", apellido: "Goirundo", edad: 33},
    {id: "2", nombre: "Camila", apellido: "Morlivo", edad: 23},
    {id: "3", nombre: "Veronica", apellido: "Tavaglione", edad: 30},

]

app.get('/', (req, res) => {
    res.send({usuarios});
})

app.get('/usuario/:id', (req, res) => {
    const userId = req.params.id;
    const user = usuarios.find(usuario => usuario.id === userId)
    if(!user){
        return res.send({error: 'Usuario no encontrado'})
    }

    res.send({user}); 
});

app.listen(PORT, () =>{
    console.log(`Escuchando en puerto ${PORT}`)
})