const sumar = (numero1, numero2) => numero1 + numero2;
const restar = (numero1, numero2) => numero1 - numero2;
const multiplicar = (numero1, numero2) => numero1 * numero2;
const dividir = (numero1, numero2) => numero1 / numero2; 

const realizarOperacion = (numero1, numero2, funcionCallBack) => {
    console.log("Realizo la operacion que recibo!!");
    let resultado = funcionCallBack(numero1, numero2);
    console.log(`El resultado de la operacion enviada es: ${resultado}`)
}

realizarOperacion(22,15,sumar);
realizarOperacion(22,7, dividir);