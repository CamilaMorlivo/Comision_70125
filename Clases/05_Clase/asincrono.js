console.log("Iniciando tarea")

setTimeout(() =>{
    console.log("Ejecutando tarea")
}, 3000)

console.log("Finalizar tarea")

let i = 0;

const intervalo = setInterval(() =>{
    i++;

    console.log("Ejecutando intervalo")
    
    if(i === 5){
        clearInterval(intervalo);
    }

},  2000)