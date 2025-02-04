const paragraphs = [
  document.getElementById('p1'),
  document.getElementById('p2'),
  document.getElementById('p3')
] 

let count = 0

const apis = [
  'https://api.api-onepiece.com/v2/sagas/en',
  'https://api.api-onepiece.com/v2/characters/en',
  'https://api.api-onepiece.com/v2/fruits/en'
]

async function getOnePieceInfo (){
  try {
    for await(let api of apis) {
      const response = await fetch(api)
      const data = await response.json()
      console.log(typeof(data))
      console.log(data)
      paragraphs[count].innerHTML = data.map(item => `<p>${item.name}</p>`).join('');
      count++
    }
  } catch (error){
    console.warn(error)
  }
}

getOnePieceInfo()