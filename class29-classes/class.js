class Persona {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet () {
    return `Hola! Mi nombre es ${this.name} and i have ${this.age} yearsold`
  }
}

const persona1 = new Persona('Jose', 43)

console.log(persona1)