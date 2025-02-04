function promiseFetchData(api) {
  fetch(api)
    .then(response => {
      if(!response.ok) throw new Error('Error en la solicitud')
        return response.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

async function asyncronousFetchData(api) {
  try {
    const response = await fetch(api)
    const data = response.json()
    console.log(data)
  } catch(error) {
    console.log(error)
  }
} 