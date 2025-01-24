// Ejemplo básico de switch-case
const day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Weekend");
    break;
}

// Ejemplo de agrupación de casos
const anotherDay = 5;

switch (anotherDay) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("It's a weekday");
    break;
  case 6:
  case 7:
    console.log("It's the weekend!");
    break;
  default:
    console.log("Invalid day");
    break;
}