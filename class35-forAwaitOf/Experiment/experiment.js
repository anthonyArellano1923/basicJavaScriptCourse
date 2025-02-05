const apis = [
  'https://api.api-onepiece.com/v2/sagas/en',
  'https://api.api-onepiece.com/v2/characters/en',
  'https://api.api-onepiece.com/v2/fruits/en'
]

async function getOnePieceInfo (){
  try {
    let data = []
    for await(let api of apis) {
      const response = await fetch(api)
      data.push(await response.json())
    }
    return data
  } catch (error){
    console.warn(error)
  }
}

async function checkData() {
  const isItobject = await getOnePieceInfo()
  if (Array.isArray(isItobject)) {
    console.log("Es un array con", isItobject.length, "elementos");
    
    // Recorrer cada objeto dentro del array
    isItobject.forEach((dataset, index) => {
      console.log(`Dataset ${index}:`, dataset);
      console.log("Keys:", Object.keys(dataset));
      console.log("Values:", Object.values(dataset));
    });
  } else {
    console.log("Es un objeto:", isItobject);
    console.log("Keys:", Object.keys(isItobject));
    console.log("Values:", Object.values(isItobject));
  }

}

checkData()