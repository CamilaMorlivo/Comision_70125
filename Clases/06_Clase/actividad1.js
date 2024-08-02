import express from 'express';

const app = express();

app.get('/bienvenida', (req, res) =>{
    res.send('<h1 style="color:blue">Bienvenida al sitio</h1>')
});

app.get('/usuario', (req, res) => {
    const usuario = {
        nombre: "Fernando",
        apellido: "Giraudo",
        edad: 33,
        email: "fergiraudo@gmail.com"
    }

    res.send({usuario})
});

app.listen(8080, () => {
    console.log("Escuchando en puerto 8080")
})