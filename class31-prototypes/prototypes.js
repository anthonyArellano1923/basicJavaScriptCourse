class Animal {
  constructor  (name, type) {
    this.name = name
    this.type = type
  }

  makeSound () {
    return `The ${this.name} makes a sound`
  }
 }

 class Dog extends Animal {
  constructor(name, type, race) {
    super(name, type)
    this.race = race
  }

  makeSound () {
    return 'The dog barks'
  }

  run () {
    return `The dog runs happily as all ${this.race} do.`
  }
 }

 const animal1 = new Animal('Wolf', 'canid')
 const dog1 = new Dog('Dog', 'Canid', 'German Shepherd')

//Adding a method to an instance of an object.

 animal1.aditionalMethod = function () {
  return 'This is an instance method.'
 }

 console.log(animal1.aditionalMethod())
/* console.log(dog1.aditionalMethod()) - 
      Esta función no existe en esta instancia ya que el método se añadió como propiedad al objeto animal1. 
*/

//Adding a method to a class's prototype.

Animal.prototype.aditionalMethod2 = function () {
  return 'This is a second method.'
}

Dog.prototype.aditionalMethod3 = function () {
  return 'This is a third method.'
}

console.log(animal1.aditionalMethod2(), dog1.aditionalMethod2())
console.log(dog1.aditionalMethod3())

/* console.log(animal1.aditionalMethod3())

  This line doesn't work because the method 'aditionalMethod3()' was added to Dog's class prototype, so when animal1 calls back that method it returns an error because it's not an instance of Dog class.
*/