let valoresOriginales = [1,2,5,6,4]

let valoresNuevos = valoresOriginales.map( x => x + 1);

//console.log(valoresNuevos);

const funcionPar = (valor) => {
    if(valor%2 === 0){
        return valor
    }else{
        return "No es par"
    }
}

let nuevosValoresPares = valoresNuevos.map(funcionPar);

console.log(nuevosValoresPares)