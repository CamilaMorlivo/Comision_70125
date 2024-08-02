const express = require('express') 
const userRouter = require('./routes/users.router.js')
const productRouter = require('./routes/products.router.js')
const { uploader } = require('./utils/multer.js')
//importo el middleware de tercero npm i morgan
//const logger = require('morgan')
//import express from 'express'

const app = express()
const PORT = 8080
console.log(__dirname)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use( '/static', express.static(__dirname + '/public'))
//app.use(logger('dev'))

app.use(function(req, res, next){
    console.log('Time: ', Date.now())
    next()
})

//http://localhost:8080/ + /api/users
app.post('/', uploader.single('myFile'), (req, res) => {
    res.send('archivo subido')
})
app.use('/api/users', userRouter)
app.use('/api/products', productRouter)


app.use((error, req, res, next) => {
    console.log(error.stack)
    res.status(500).send('error de server')
})

app.listen(PORT, () => {
    console.log('escuchando en el puerto: ', PORT)
})

//npm i morgan -> middleware de tercero


