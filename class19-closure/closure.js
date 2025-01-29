function counter() {
  let count = 0
  return  function () {
    console.log(count)
    count ++
    }
}


const counter1 = counter()
const counter2 = counter()

counter1()
counter1()
counter2()
counter1()


function createGreet() {
  let message = 'Hola, '
  function inner(name) {
    return console.log(message + name)
  }
  return inner
}

const greet1 = createGreet()
const greet3 = createGreet()

greet1('Saul')
greet3('Aurora')