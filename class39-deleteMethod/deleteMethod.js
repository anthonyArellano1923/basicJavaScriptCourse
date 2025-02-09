const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("#posts-container");

function sendHTTPRequest(method, url, data) {
  return fetch(url, {
    method : method,
    body : JSON.stringify(data),
    headers : {
      "content-type" : "application/json",
    }
  }).then(response => {
    return response.json()
  })
}

async function fetchData() {
  const responseData = await sendHTTPRequest(
    "GET", 
    "https://jsonplaceholder.typicode.com/posts"
    )
  const listOfPost = responseData
  for (let post of listOfPost){
    const postContainer = document.createElement("article"); //Crea un elemento Article
    postContainer.id = post.id; //Añade la etiqueta id con nombre igual a la propiedad id de la iteración
    postContainer.classList.add("post-item"); //Añade la case post-item al elemento
  
    const title = document.createElement("h2"); //Crea un elemento h2
    title.textContent = post.title; //Añade el mismo texto a la etiqueta h2 que la propiedad title de la iteración
  
    const body = document.createElement("p");//Crea un elemento p
    body.textContent = post.body;//Añade el mismo texto a la etiqueta p que la propiedad body de la iteración
  
    const button = document.createElement("button");//Crea un botón.
    button.textContent = "DELETE Content";//Añade el texto DELETE Content al texto del botón.
  
    postContainer.append(title);//Añade el título al contenedor postContainer.
    postContainer.append(body);//Añade el contenido al contenedor postContainer.
    postContainer.append(button);//Añade el botón eliminar al contenedor postContainer.
  
    listElement.append(postContainer);
  }
}

async function createPost(title, body) {
  const userID = Math.floor(Math.random() * 1000)
  const content = {
    userId : userID,
    title : title,
    body: body
  }

  const response = await sendHTTPRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    content)
  console.log(response)
}



form.addEventListener("submit", (event) => {
  event.preventDefault()
  const title = event.currentTarget.querySelector("#title").value
  const content = event.currentTarget.querySelector("#content").value
  createPost(title, content)
})

postList.addEventListener("click", event => {
  if(event.target.tagName === "BUTTON") {
    const postId = event.target.closest("article").id
    console.log(postId)
    const deleteUrl = "https://jsonplaceholder.typicode.com/posts" + `/${postId}`
    sendHTTPRequest("DELETE", deleteUrl)
  }
  
})

fetchButton.addEventListener("click", fetchData);

