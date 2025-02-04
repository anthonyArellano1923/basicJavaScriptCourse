const usersDatabaseClass = usersDatabase
const usersTimelineClass = usersTimeline

function validateUser(username, password) {
  for (let i = 0; i < usersDatabaseClass.length; i++) {
    if(usersDatabaseClass[i].username === username && usersDatabaseClass[i].password === password) {
      return true
    }
  }
  return false
}

function signIn() {
  if(validateUser(userName,userPassword)) {
    alert(`Te damos la bienvenida a tu cuenta, ${userName}`)
    console.log(usersTimelineClass)
  } else {
    alert('Usuario o contraseña incorrectos.')
  }
}

const userName = prompt('Introduce tu usuario: ')
const userPassword = prompt('Introduce tu contraseña: ')

signIn()
