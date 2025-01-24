// Ejemplo 1: Convertir cadena a entero con parseInt
let strToInt = parseInt("42.5"); // Convierte "42.5" a un número entero
console.log("String a Entero con parseInt:", strToInt);

// Ejemplo 2: Convertir cadena a número decimal con parseFloat
let strToFloat = parseFloat("42.58"); // Convierte "42.58" a un número flotante
console.log("String a Decimal con parseFloat:", strToFloat);

// Ejemplo 3: Convertir binario a decimal con parseInt
let binaryToDecimal = parseInt("1010", 2); // Convierte "1010" en base 2 (binario) a base 10 (decimal)
console.log("Binario a Decimal con parseInt:", binaryToDecimal);

// Ejemplo 4: Convertir hexadecimal a decimal con parseInt
let hexToDecimal = parseInt("1F", 16); // Convierte "1F" en base 16 (hexadecimal) a base 10 (decimal)
console.log("Hexadecimal a Decimal con parseInt:", hexToDecimal);

// Ejemplo 5: Convertir decimal a binario usando toString
let decimalToBinary = (42).toString(2); // Convierte el número 42 a binario (base 2)
console.log("Decimal a Binario con toString:", decimalToBinary);

// Ejemplo 6: Convertir decimal a hexadecimal usando toString
let decimalToHex = (255).toString(16); // Convierte el número 255 a hexadecimal (base 16)
console.log("Decimal a Hexadecimal con toString:", decimalToHex);

// Ejemplo 7: Convertir booleano a número usando typecasting
let boolToNum = Number(true); // Convierte true a 1
console.log("Booleano a Número con Number:", boolToNum);

// Ejemplo 8: Convertir número a cadena usando toString
let numToStr = (123).toString(); // Convierte el número 123 a "123"
console.log("Número a String con toString:", numToStr);

// Ejemplo 9: Intentar convertir una cadena no numérica a un número
let invalidNumber = parseInt("Hola"); // Devuelve NaN porque "Hola" no es un número
console.log("Cadena no numérica a Número con parseInt:", invalidNumber);

// Ejemplo 10: Convertir un número flotante a entero con parseInt
let floatToInt = parseInt(42.99); // Descarta la parte decimal y devuelve solo 42
console.log("Flotante a Entero con parseInt:", floatToInt);

// Ejemplo 11: Convertir una cadena numérica con espacios
let strWithSpaces = parseInt("  123   "); // Ignora los espacios y devuelve 123
console.log("Cadena con Espacios a Entero con parseInt:", strWithSpaces);

// Ejemplo 12: Convertir una cadena vacía a un número
let emptyStrToNum = Number(""); // Una cadena vacía se convierte en 0
console.log("Cadena vacía a Número con Number:", emptyStrToNum);

// Ejemplo 13: Uso de parseFloat para convertir una cadena con letras
let mixedStrToFloat = parseFloat("42.58abc"); // Devuelve 42.58 y omite las letras después del número
console.log("Cadena mixta a Decimal con parseFloat:", mixedStrToFloat);

// Ejemplo 14: Convertir un número decimal a binario y de binario a decimal
let decimalToBinaryAgain = (15).toString(2); // Decimal a binario
let binaryToDecimalAgain = parseInt(decimalToBinaryAgain, 2); // Binario a decimal
console.log("Decimal a Binario:", decimalToBinaryAgain);
console.log("Binario a Decimal:", binaryToDecimalAgain);

// Definición de variables de prueba
let num = 10;
let bool = true; // En operaciones, `true` se interpreta como 1 y `false` como 0
let str = "Hola";

// Sumas de distintos tipos de datos
let numPlusBool = num + bool; // Número + Booleano
let numPlusStr = num + str;  // Número + String
let numPlusNum = num + 5;    // Número + Número
let strPlusBool = str + bool; // String + Booleano
let strPlusNum = str + num;   // String + Número
let strPlusStr = str + " Mundo"; // String + String
let boolPlusNum = bool + num; // Booleano + Número
let boolPlusBool = bool + false; // Booleano + Booleano
let boolPlusStr = bool + str; // Booleano + String

// Suma combinada: String + Booleano + Número
let strPlusBoolPlusNum = str + bool + num;

// Imprimir resultados
console.log("Número + Booleano:", numPlusBool);
console.log("Número + String:", numPlusStr);
console.log("Número + Número:", numPlusNum);
console.log("String + Booleano:", strPlusBool);
console.log("String + Número:", strPlusNum);
console.log("String + String:", strPlusStr);
console.log("Booleano + Número:", boolPlusNum);
console.log("Booleano + Booleano:", boolPlusBool);
console.log("Booleano + String:", boolPlusStr);
console.log("String + Booleano + Número:", strPlusBoolPlusNum);