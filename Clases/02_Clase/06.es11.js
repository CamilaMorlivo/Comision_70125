let vari;

let valor1 = vari ?? "Vino nula";
let valor2 = vari || "Vino nula";

//console.log("Valor 1 es igual a : " + valor1);

//console.log("Valor 2 es igual a : " + valor2);

class Persona{
    #matorEdad = 18;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    obtenerNombre(){
        return this.name;
    }

    #metodoPrivado(){
        console.log("Metodo privado");
    }

    usoMetodoPrivado(){
        this.#metodoPrivado();
    }

}

const persona = new Persona("Luis", 25);

console.log(persona.usoMetodoPrivado())
//console.log(persona.MetodoPrivado()); -> no se puede usar, te tira un error


