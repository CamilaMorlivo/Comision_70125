class Contador{
    constructor(responsable){
        this.responsable = responsable;
        this.conteo = 0;
        Contador.contadorGlobal++;
    }

    static contadorGlobal = 0;

    getResponsable = () =>{
        return this.responsable;
    }

    contar = () =>{
        this.conteo++;
        Contador.contadorGlobal++;
    }

    getConteoIndividual = () =>{
        return this.conteo;
    }

    getContadorGlobal = () =>{
        return Contador.contadorGlobal;
    }
}

const julia = new Contador("Julia"); //Ind 0 Gl 1 //Ind 0 GL 4
const pedro = new Contador("Pedro"); //ind 0 Gl 2 //ind 1 GL 3 //Ind 2 Gl 4


pedro.contar();

console.log(`Pedro cuenta individual ${pedro.getConteoIndividual()} y global ${pedro.getContadorGlobal()}`);
console.log(`Julia cuenta individual ${julia.getConteoIndividual()} y global ${julia.getContadorGlobal()}`);
