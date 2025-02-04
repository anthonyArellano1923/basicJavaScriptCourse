/*Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña.
2. El sistema debe ser capaz de validar si el usuario y
contraseña ingresados por el usuario existen en la base de
datos.
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario. 
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun
timeline.
*/

const usersDatabase = [
  {
    username: "andres",
    password: "123",
  },
  {
    username: "caro",
    password: "456",
  },
  {
    username: "mariana",
    password: "789",
  },
];

const usersTimeline = [
  {
    username: "Estefany",
    timeline: "Me encata Javascript!",
  },
  {
    username: "Oscar",
    timeline: "Bebeloper es lo mejor!",
  },
  {
    username: "Mariana",
    timeline: "A mi me gusta mÃ¡s el cafÃ© que el tÃ©",
  },
  {
    username: "Andres",
    timeline: "Yo hoy no quiero trabajar",
  },
];

function showTimeline(user) {
  const timeline = usersTimeline
  console.log(`Hola, ${user.username}, bienvenido de vuelta!`)
  console.log('A continuación un resumen de las últimas noticias.')
  timeline.forEach(user => {
    console.log(`El usuario ${user.username} ha comentado: `)
    console.log(`${user.timeline}`)})
}

function getCredentials(){
  const userName = prompt('Introduce tu usuario: ').toLowerCase()
  const userPassword = prompt('Introduce tu contraseña: ').toLowerCase()
  userImput = {
    username : userName,
    password : userPassword
  }
  return userImput
}

function validateCredentials(userImput) {
  const credentialsToValidate = userImput
  const userExists = usersDatabase.find (user => user.username == credentialsToValidate.username && user.password == credentialsToValidate.password)
  return userExists
}

function logIn() {
  const validateUserCredentials = validateCredentials(getCredentials())
  if (validateUserCredentials){
    showTimeline(validateUserCredentials)
  } else {
    console.warn('Usuario o contraseña ingresados no válidos')
    logIn()
  }
}

logIn()

