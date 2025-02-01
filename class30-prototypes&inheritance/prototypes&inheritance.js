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

 console.log(animal1.makeSound())
 console.log(dog1.makeSound())
 console.log(dog1.run())