"use strict";

const posts = [];
function send() {
  const title = document.getElementById("post-title").value;
  const text = document.getElementById("post-text").value;
  const author = document.getElementById("post-author").value;
  const post = new Post(title, text, author);
  posts.push(post);
  renderPosts(posts);
}

function Post(title, text, author, remove) {
  this.title = title;
  this.text = text;
  this.author = author;
  this.remove = "Remove this post";
  this.getListObject = function () {
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const pText = document.createElement("p");
    const pAuthor = document.createElement("p");
    const remove = document.createElement("button");
    h3.innerText = this.title;
    pText.innerText = this.text;
    pAuthor.innerText = this.author;
    remove.innerText = this.remove;
    li.appendChild(h3);
    li.appendChild(pText);
    li.appendChild(pAuthor);
    li.appendChild(remove);
    return li;
  };
}

function renderPosts() {
  const list = document.getElementById("post-list");
  list.innerHTML = "";
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const li = post.getListObject();
    list.appendChild(li);
  }
}
