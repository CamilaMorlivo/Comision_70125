const fs = require('fs')

fs.writeFileSync('./ejemplo.txt', 'Hola como estas?', 'utf-8');

if(fs.existsSync('./ejemplo.txt')){
    let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')
    console.log(contenido);
    fs.appendFileSync('./ejemplo.txt', ' mas contenido!!', 'utf-8')
    contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')
    console.log(contenido);
    fs.unlinkSync('./ejemplo.txt')
}