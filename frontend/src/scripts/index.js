const postsContainer = document.querySelector('.posts-list .container');

let likeButton = document.querySelector('.posts-list .container .card .post-info .likes button');

function likePost(post) {
  const finalPost = {
    title: post.title,
    content: post.content,
    likes: post.likes + 1
  }

  fetch('http://localhost:3333/posts', {
    method: 'POST',
    body: JSON.stringify(finalPost),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(window.location.replace("index.html"));
}

async function fetchPosts() {
  const response = await fetch('http://localhost:3333/posts');
  const posts = await response.json();
  console.log(posts)

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
          <button onclick="likePost(${post})"><i class="fas fa-thumbs-up"></i></button>
        </div>
      </div>
    </div>`
  });

  postsContainer.innerHTML = template;
}

window.addEventListener('DOMContentLoaded', fetchPosts);
likeButton.addEventListener('click', likePost);