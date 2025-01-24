function gameStart() {
  function compareNumber(){
    const playerNumber = parseInt(prompt('Introduce un número del 1 al 10'))
    if(playerNumber === secretNumber){
      console.log(`Felicidades! El número secreto es ${secretNumber}`)
      return true
    } else if (playerNumber < secretNumber) {
      console.log('Intenta un poco nás arriba!')
      return compareNumber()
    } else {
      console.log('Intenta un poco nás abajo!')
      return compareNumber()
    }
  }
  const secretNumber = Math.floor(Math.random() * 10 + 1)
  const endGame = compareNumber()
  if (endGame){
    return
  }
}