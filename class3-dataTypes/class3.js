// Primitives
let name = "Anthony"; // String
let age = 31; // Number
let isStudent = true; // Boolean
let undefinedValue; // Undefined
let symbol = Symbol("identifier"); // Symbol
let empty = null; // Null
let bigIntExample = 1234567890123456789012345678901234567890n; // BigInt

// Complex
let array = [1, 2, 3, 4, 5]; // Array
let object = { name: "Anthony", profession: "Student" }; // Object
let date = new Date(); // Date
let regex = /[a-zA-Z]/g; // RegExp
let func = function() { return "I am a function"; }; // Function

// Function to print the name, value, and data type
function printData(variableName, variableValue) {
    let valueToDisplay = typeof variableValue === "symbol" ? variableValue.toString() : variableValue;
    console.log(`${variableName}, Value: ${valueToDisplay}, Type: ${typeof variableValue}`);
    console.log()
}

// Print data
printData("name", name);
printData("age", age);
printData("isStudent", isStudent);
printData("undefinedValue", undefinedValue);
printData("symbol", symbol);
printData("empty", empty);
printData("bigIntExample", bigIntExample);

printData("array", array);
printData("object", object);
printData("date", date);
printData("regex", regex);
printData("func", func);
