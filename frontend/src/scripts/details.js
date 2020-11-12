const detailsContainer = document.querySelector('.post-details .container');

const id = new URLSearchParams(window.location.search).get('id');

function likePost(id) {
  fetch(`http://localhost:3333/like/${id}`, {
    method: 'PATCH',
  }).then(window.location.replace(`details.html?id=${id}`));
}

function deletePost(id) {
  fetch(`http://localhost:3333/posts/${id}`, { method: 'DELETE' });

  window.location.replace("index.html");
}

async function fetchPost() {

  const response = await fetch(`http://localhost:3333/posts/${id}`);
  const post = await response.json();

  const template = `
  <div class="post">
    <div class="card flex">
      <h1 class="lg px-1">${post.title}</h1>
      <p class="md p-1">${post.content}</p>  
      <div class="likes-row flex">
        <span class="lead p-1">${post.likes} Likes</span>
      <button onclick="likePost(${post.id})"><i class="fas fa-thumbs-up"></i></button>
    </div>
    </div>
    <div class="flex post-buttons">
      <a href="index.html" class="btn btn-dark">Voltar</a>
      <a href="#" onClick="deletePost(${post.id})" class="btn btn-error">Excluir</a>
    </div>
  </div>
  `

  detailsContainer.innerHTML = template;
}

window.addEventListener('DOMContentLoaded', fetchPost);