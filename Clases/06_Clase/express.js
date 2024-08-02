import express from 'express';

const app = express();

//-> app.get si vamos a obtener desde cierta ruta, cierta info
app.get('/saludo', (req,res) =>{
    res.send("Hola como estan?")
}) 


app.listen(8081, () =>{
    console.log("Servidor en puerto 8081")
})
