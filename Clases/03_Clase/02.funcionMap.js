//function miFuncionMap(arreglo, funcionCallBack){
    //la funcionCallBack es la funcion que recibe como parametro

    //let nuevoArreglo = [];

    //for (let i = 0; i < arreglo.length; i++) {
      //  const element = arreglo[i];
        
        //let nuevoValor = funcionCallBack(elemento);
        //nuevoArreglo.push(nuevoValor);
    //}
    //return nuevoArreglo;
//}

//const funcionPar = (valor) => {
  //  if(valor%2 === 0){
    //    return valor
   // }else{
     //   return "No es par"
    //}
//}


let valoresOriginales = [1,2,5,6,4]

let valoresNuevos = miFuncionMap(valoresOriginales, x => x + 1); 

//let valoresNuevos = miFuncionMap(valoresOriginales, funcionPar); 

Array.prototype.miMap = function(funcionCallBack){
    
    let nuevoArreglo = [];

    for (let i = 0; i < arreglo.length; i++) {
        const element = this[i];
        
        let nuevoValor = funcionCallBack(elemento);
        nuevoArreglo.push(nuevoValor);
    }
    return nuevoArreglo;
}

let nuevoArreglo = valoresOriginales.miMap(x=>x+1)

console.log(valoresNuevos)