const object = {key : 'value'}

const person = {
    name : 'Jose',
    LastName : 'Perez',
    Age: 31,
    address: {
      city: 'Santiago',
      street: 'Carmen',
      number: 418
      },
    greet(name) {
        return `Hola ${name}, mi nombre es ${this.name}`
      }
} 

console.log(person.address)
console.log(person.greet('Luis'))