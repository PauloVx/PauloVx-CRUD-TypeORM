const form = document.querySelector('.content .container .form-area form');
let titleInput = document.querySelector('[name="titleInput"]');
let contentInput = document.querySelector('[name="contentInput"]');

function createPost(e) {
  e.preventDefault();
  const post = {
    title: titleInput.value,
    content: contentInput.value,
    likes: 0
  }

  fetch('http://localhost:3000/posts', {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(window.location.replace("index.html"));
}

form.addEventListener('submit', createPost);