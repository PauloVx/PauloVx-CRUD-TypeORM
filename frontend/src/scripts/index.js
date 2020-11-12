const postsContainer = document.querySelector('.posts-list .container');

let likeButton = document.querySelector('.posts-list .container .card .post-info .likes button');

function likePost(id) {
  fetch(`http://localhost:3333/like/${id}`, {
    method: 'PATCH',
  }).then(window.location.replace("index.html"));
}

async function fetchPosts() {
  const response = await fetch('http://localhost:3333/posts');
  const posts = await response.json();

  let template = '';

  posts.forEach(post => {
    template += 
   `<div class="card">
      <h2>${post.title}</h2>
      <p>${post.content.slice(0, 200)}...</p>
      <div class="post-info flex">
        <a href="details.html?id=${post.id}" class="btn btn-dark">Ler mais...</a>
        <div class="likes">
          <span class="likes-number">${post.likes} Likes</span>
          <button onclick="likePost(${post.id})"><i class="fas fa-thumbs-up"></i></button>
        </div>
      </div>
    </div>`
  });

  postsContainer.innerHTML = template;
}

window.addEventListener('DOMContentLoaded', fetchPosts);
likeButton.addEventListener('click', likePost);