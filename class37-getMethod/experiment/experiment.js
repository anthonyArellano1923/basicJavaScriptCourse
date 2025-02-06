const listElement = document.querySelector(".posts"); //Container section of cards.

function getHTTPInfo(method, url, data) {
  return fetch(url, {
    method : method,
    body : JSON.stringify(data),
    headers : {
      "content-type" : "application/JSON"
    }
  }).then(response => {
    return response.json()
  })
}

async function fetchData() {
  const responseData = await getHTTPInfo(
    "GET", 
    "https://api.api-onepiece.com/v2/characters/en")
  const charactersList = responseData
  for(let character of charactersList) {
    //Create article
    const postCard = document.createElement("article")
    //Add article's class and id
    postCard.id = character.id
    postCard.classList.add("post-item")
    //Create elements of article
    const characterName = document.createElement("h2")
    characterName.textContent = character.name
    const characterCrew = document.createElement("p")
    characterCrew.textContent = "Pirate Crew: " + (character.crew?.name || "Not a member of any Pirate crew.")
    const characterFruit = document.createElement("p")
    characterFruit.textContent = "Fruit: " + (character.fruit?.name || "Has no fruit.")
    const characterBounty = document.createElement("p")
    characterBounty.textContent = "Bounty: " + (character?.bounty || "Has no bounty.")
    const button = document.createElement("button");
    button.textContent = "DELETE Content";
    //Add elements to article
    postCard.append(characterName, characterCrew, characterFruit, characterBounty, button)
    //Add article to cards section
    listElement.append(postCard)
  }
}

fetchData()

