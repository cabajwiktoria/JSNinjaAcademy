"use strict";

const posts = [];

class Post {
  constructor(title, text, author) {
    this.title = title;
    this.text = text;
    this.author = author;
    this.remove = "Remove post";
    this.index = Date.now();
    this.getListObject = function () {
      const li = document.createElement("li");
      const h3 = document.createElement("h3");
      const pText = document.createElement("p");
      const pAuthor = document.createElement("p");
      const button = document.createElement("button");
      h3.innerText = this.title;
      pText.innerText = this.text;
      pAuthor.innerText = this.author;
      button.innerText = this.remove;
      li.id = this.index;
      button.onclick = () => {
        let currentIndex = this.index;
        for (let i = 0; i < posts.length; i++)
          if (posts[i].index == this.index) {
            let currentPost = document.getElementById(currentIndex);
            currentPost.remove();
          }
      };
      li.appendChild(h3);
      li.appendChild(pText);
      li.appendChild(pAuthor);
      li.appendChild(button);
      return li;
    };
  }
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

function send() {
  const title = document.getElementById("post-title").value;
  const text = document.getElementById("post-text").value;
  const author = document.getElementById("post-author").value;
  const post = new Post(title, text, author);
  posts.push(post);
  renderPosts(posts);
}
