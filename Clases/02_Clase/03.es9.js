const persona1 = {
    name: "Pedro",
    lastname: "Lopez",
    age: 25
}

const persona2 = {
    name: "Lucia",
    lastname: "Perez",
    age: 25
}

//spread destructuring
let {name, lastname} = persona2;

console.log(name);
console.log(lastname);

//rest
let persona3 = {...persona1};

persona3.nombre = "Luis";

//Pedro y Luis
let {age, ...nombreyapellido} = persona1;














