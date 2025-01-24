// Comparación de igualdad (==): compara solo el valor, no el tipo
let a = 5; // Número
let b = "5"; // Cadena de texto
console.log(a == b); // true, porque el valor es igual, aunque el tipo no lo sea

// Comparación estricta de igualdad (===): compara valor y tipo
console.log(a === b); // false, porque el valor es igual, pero el tipo es diferente

// Comparación de diferencia (!=): compara solo el valor
console.log(a != b); // false, porque el valor es igual

// Comparación estricta de diferencia (!==): compara valor y tipo
console.log(a !== b); // true, porque el tipo es diferente

// Comparadores mayor que (>) y menor que (<)
let x = 10;
let y = 20;
console.log(x > y); // false, porque 10 no es mayor que 20
console.log(x < y); // true, porque 10 es menor que 20

// Comparadores mayor o igual que (>=) y menor o igual que (<=)
let z = 10;
console.log(x >= z); // true, porque 10 es igual a 10
console.log(x <= y); // true, porque 10 es menor que 20