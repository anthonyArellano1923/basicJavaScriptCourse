function Persona(name, lastName, age, phoneNumber, gender) {
  this.name = name
  this.lastName = lastName
  this.age = age
  this.phoneNumber = phoneNumber
  this.gender = gender
}

const persona1 = new Persona('Angel', 'Lopez', 24, 513445612, 'Male')
const persona2 = new Persona('Maria', 'Gomez', 30, 512334556, 'Female');
const persona3 = new Persona('Carlos', 'Fernandez', 28, 514567891, 'Male');
const persona4 = new Persona('Lucia', 'Martinez', 35, 517892345, 'Female');
const persona5 = new Persona('Javier', 'Rodriguez', 40, 519876543, 'Male');

console.log(persona1);
console.log(persona2);
console.log(persona3);
console.log(persona4);
console.log(persona5);

//Using .prototye

Persona.prototype.address = {
  street : 'San Ignacio',
  number : 18, 
  postalCode : 8400000
}

Persona.prototype.introduceSelf = function () {
  return `Hi, my name is ${this.name}, and i live in ${this.address.street} ${this.address.number}, postal code ${this.address.postalCode}.`
}

Object.assign(Persona.prototype, {
  goodBye : function (name) {
    return `Good bye, ${name}, have a great day!`
  },
  myAddress : function () {
    return `I live in ${this.address.street} ${this.address.number}, postal code ${this.address.postalCode}`
  },
  greet : function (name) {
    return `Hi, ${name}, How are you?`
  }
})


// console.log(persona1.greet())
console.log(persona1.introduceSelf())
console.log(persona1.greet('Marcus'))
console.log(persona1.myAddress())
console.log(persona1.goodBye('Marcus'))

//Methods inside constructor

function Fruta(nombre, color, sabor, temporada) {
  this.nombre = nombre;
  this.color = color;
  this.sabor = sabor;
  this.temporada = temporada;
  this.whenToColectMe = function () {
    return `You better look for me in ${temporada}`
  }
}

const manzana = new Fruta("Manzana", "Rojo", "Dulce", "Otoño");
const mango = new Fruta("Mango", "Amarillo", "Dulce-ácido", "Verano");

console.log(`El método .whenToCollectMe es igual para ambas instancias: `, manzana.whenToColectMe === mango.whenToColectMe);
console.log(`El método .greet es igual para ambas instancias: `, persona1.greet === persona2.greet);
