const person = { name: "Anthony", age: 31 };
for (const key in person) {
  console.log(key); // Imprime: "name", luego "age"
}

const object = {
  naranjas : 4,
  peras : 3,
  manzanas : 6,
  pinha : 5
}

for (fruta in object){
  console.log(fruta, object[fruta])
}