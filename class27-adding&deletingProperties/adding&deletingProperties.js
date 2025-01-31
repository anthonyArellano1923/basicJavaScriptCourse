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

person.cellphone = 5555555
person.goodBye = (name) => `See you later, ${name}`

console.log(person)
console.log(person.goodBye('Monica'))

delete person.cellphone

console.log(person)

