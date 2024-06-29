class Persona{
    constructor(name, lastName, age, city){
        this.name = name;
        this.lastName = lastName;
        //si o si voy a nacesitar estos dos datos
    }

    static specie = "humano";

    saludar = () =>{
        console.log(`Hola soy ${this.name}, mucho gusto`);
    }

    getName = () => {
        console.log(`Me llamo ${this.name}`);
    }

    despedir = () => {
        console.log("Chau, nos vemos!");
    }
}

const juan = new Persona("Juan", "Bida");
const lucia = new Persona("Lucia", "Martinez");

lucia.getName();
juan.getName();

console.log(Persona.specie);

