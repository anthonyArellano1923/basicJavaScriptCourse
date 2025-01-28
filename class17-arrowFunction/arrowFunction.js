//Regular function
function food(protein, vegetables) {
  return `${protein} + ${vegetables}`
}

console.log(food('🥩', '🥗'))

//Arrow function

const food2 = (protein, vegetables) => {
  return `${protein} + ${vegetables}`
}

console.log(food2('🥩', '🥗'))

//Implicit arrow function

const food3 = (protein, vegetables) => `${protein} + ${vegetables}`
console.log(food3('🥩', '🥗'))

//Lexical binding + Arrow function

const person = {
  name: 'Andres',
  lastName: 'Perez',
  Age: '31',
  greet1: function (message) {
    return `Saludos, ${this.name}. ${message}`
  },
  greet2: message => `Saludos, ${this?.name}. ${message}`,
  greet3: function(message){
    const greetPerson = () => `Saludos ${this.name}`
    return `${greetPerson()}. ${message}`
  }
}

console.log(person.greet1('Ten un bonito día'))
console.log(person.greet2('Toma agüita'))
console.log(person.greet3('Te quiero'))