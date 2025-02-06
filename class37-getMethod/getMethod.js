// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("#posts-container");

function getHTTPRequest(method, url, data) {
  return fetch(url, {
    method : method,
    body : JSON.stringify(data),
    headers : {
      "content-type" : "application/JSON",
    }
  }).then(response => {
    return response.json()
  })
}

async function fetchData() {
  const responseData = await getHTTPRequest(
    "GET", 
    "https://jsonplaceholder.typicode.com/posts"
    )
  const listOfPost = responseData
  for (let post of listOfPost){
    const postContainer = document.createElement("article"); //Crea un elemento Article
    postContainer.id = post.id; //Añade la etiqueta id con nombre igual a la propiedad id de la iteración
    postContainer.classList.add("post-item"); //Añade la case post-item al elemento
    console.log(postContainer)
  
    const title = document.createElement("h2"); //Crea un elemento h2
    title.textContent = post.title; //Añade el mismo texto a la etiqueta h2 que la propiedad title de la iteración
  
    const body = document.createElement("p");//Crea un elemento p
    body.textContent = post.body;//Añade el mismo texto a la etiqueta p que la propiedad body de la iteración
  
    const button = document.createElement("button");//Crea un botón.
    button.textContent = "DELETE Content";//Añade el texto DELETE Content al texto del botón.
  
    postContainer.append(title);//Añade el título al contenedor postContainer.
    postContainer.append(body);//Añade el contenido al contenedor postContainer.
    postContainer.append(button);//Añade el botón eliminar al contenedor postContainer.
  
    console.log(typeof(postContainer))
  
    listElement.append(postContainer);
  }
}

fetchButton.addEventListener("click", fetchData);