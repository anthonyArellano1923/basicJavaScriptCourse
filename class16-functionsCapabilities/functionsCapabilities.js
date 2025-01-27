//1. Callback

//Example
function saludar(nombre) {
  console.log(`Hola, ${nombre}!`);
}

function procesarEntradaUsuario(funcionCallback) {
  const nombre = "Pedro, Juan y Diego";
  funcionCallback(nombre);
}

procesarEntradaUsuario(saludar);

//Challenge
/*Crea una función que repita un mensaje varias veces. Debe recibir como parámetros:
	1.	El mensaje (un string).
	2.	Un callback que se dispare después de cada repetición.*/

  function showMessage(message) {
    console.log(message)
  }

  function saySomething(yourFuncion) {
    const message = 'No te quiere'
    for (let i = 0; i < 3; i++) {
      yourFuncion(message)
    }
  }

  saySomething(showMessage)

  //2. Return functions

  function crearSaludo(persona) {
    return function() {
      console.log(`Hola, ${persona}!`);
    };
  }
  
  const saludarJuan = crearSaludo("Juan");
  saludarJuan(); // Imprime: "Hola, Juan!"

//Challenge

/*
Haz una función llamada creadorDeContador que retorne otra función. Esa función interna debe mantener un conteo cada vez que se llame, e imprimirlo o retornarlo. */


  function creadorDeContador(limite) {
    let counter = 0
    return function (){
      for(let i= 0; i < limite; i++) {
        console.log(counter)
        counter ++
      }
    }
  }

  const countUntil = creadorDeContador(3)
  countUntil()

  // Assign functions to variable

  const sumar = function(a, b) {
    return a + b;
  };
  
  console.log(sumar(3, 4)); // Imprime 7

  /*Challenge
  Crea una función anónima que reciba un número y verifique si es par. Asigna esa función a una variable e invócala varias veces con números distintos.

  */
console.log()
const oddEven = function(number) {console.log(`Is ${number} Even?`,number % 2 == 0)}
oddEven(2)
oddEven(5)
oddEven(8)
oddEven(67)

//Properties and methods
console.log()
function saludar() {
  console.log("¡Hola mundo!");
}

saludar.propiedadPersonalizada = "Mensaje de saludo";
saludar(); 
console.log(saludar.propiedadPersonalizada); // "Mensaje de saludo"


/*Challenge
Declara una función que realice una operación sencilla (por ejemplo, multiplicar dos números). Luego, asígnale una propiedad que describa de manera textual lo que hace la función.
*/
console.log()
function multiplyNumbers(a,b){ 
  return console.log(`${a} * ${b} = ${a * b}`)
}

multiplyNumbers.description = "function multiplyNumbers(a,b): Returns the result of multiplying a * b"
multiplyNumbers(2,3)
console.log(multiplyNumbers.description)

//Nested functions

function funcionExterna() {
  console.log("Soy la función externa");
  function funcionInterna() {
    console.log("Soy la función interna");
  }

  funcionInterna();
}

funcionExterna(); 

/*
Challenge
Crea una función calculadoraBasica que defina dentro de sí otras dos funciones: sumar(a, b) y restar(a, b). Debe pedir un tipo de operación y los valores, y según la operación, invocar la interna correspondiente.
*/

function calculator(operation, number1, number2) {
  function isANumber(a,b){
    if(typeof(a) != 'number' || typeof(b) != 'number'){
      return console.log(`number1: ${a} or number2: ${b} is a string.`)
    } else {
      selectOperation(operation)
    }
  }
  function selectOperation(operation){
    switch (operation){
      case '+':
        sum(a,b)
        break 
      
      case '*':
        multiply(a,b)
        break

      case '-':
        substract(a,b)
        break

      case '/':
      if(b == 0){
        console.log(`number2: ${b} must be different from zero.`)
        break
      }  
      divide(a,b)
        break

      default:
        console.log(`${operation} is not in the list of availible operations (+, -, *, /)`)
        break
    }
  }
  function sum(a, b){
    return console.log(`${a} + ${b} = ${a + b}`)
  }
  function substract(a,b){
    return console.log(`${a} - ${b} = ${a - b}`)
  }
  function multiply(a,b){
    return console.log(`${a} * ${b} = ${a * b}`)
  }
  function divide(a,b){
    return console.log(`${a} / ${b} = ${a / b}`)
  }

  const [a, b] = [number1, number2]
  isANumber(a,b)  
}

calculator.description = 'This is a basic calculator that sums, substracts, multiplies or divides 2 numbers. Simply type: "calculator(operation:( + || - || * || /), number 1, number 2)" in the command line and get the result.'

console.log(calculator.description)
calculator('+', 5, 5)
calculator('-', 5, 5)
calculator('*', 5, 5)
calculator('/', 5, 5)
calculator('/', 2, 0)
calculator('+', 'a', 3)
calculator('+', 3,'a')
calculator('+', 'a', 'b')