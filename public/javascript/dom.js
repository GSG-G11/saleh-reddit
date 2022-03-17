const addPostForm = document.getElementById('addPost');
const title = document.getElementById('title');
const communityName = document.getElementById('community_name');
const contentType = document.getElementById('content_type');
const content = document.getElementById('content');
const logged = document.getElementById('logged');
const addPostError = document.getElementById('addPostError');

const elementWithClass = (tagName, className) => {
  const div = document.createElement(tagName);
  div.classList.add(className);
  return div;
};

const renderCard = (container, data, isDelete) => {
  const card = elementWithClass('div', 'card');
  const vote = elementWithClass('div', 'vote');
  const post = elementWithClass('div', 'post-card');
  const button1 = elementWithClass('button', 'voteBtn');
  const button2 = elementWithClass('button', 'voteBtn');
  const button3 = elementWithClass('a', 'login');
  const button4 = elementWithClass('button', 'delete');
  const head = elementWithClass('h5', 'voteBtn');
  const p = document.createElement('p');
  const up = '<span class="iconify" data-icon="bx:downvote"  data-rotate="180deg"></span>';
  const down = '<span class="iconify" data-icon="bx:downvote"></span>';
  button1.innerHTML = up;
  button2.innerHTML = down;
  button1.id = data.id;
  button2.id = data.id;
  button3.id = data.id;
  button3.href = `/html/comments.html?id=${data.id}`;
  button4.id = data.id;
  button4.textContent = 'delete';
  button3.textContent = 'comments';
  button1.classList.add('up');
  button2.classList.add('down');
  vote.appendChild(button1);
  vote.innerHTML += data.vote;
  vote.appendChild(button2);
  card.appendChild(vote);
  head.innerHTML = `${data.community_name} posted by <a href="/html/profile.html?id=${data.user_id}">${data.username}<a> at ${data.post_date}`;
  post.appendChild(head);
  if (data.content_type === 'image') {
    const img = elementWithClass('img', 'img');
    img.setAttribute('src', data.content);
    post.appendChild(img);
  } else {
    p.textContent = data.content;
    post.appendChild(p);
  }
  post.appendChild(button3);
  if (isDelete) {
    post.appendChild(button4);
  }
  card.appendChild(post);
  container.appendChild(card);
};

const renderCommintCard = (container, data) => {
  const card = elementWithClass('div', 'card');
  const vote = elementWithClass('div', 'vote');
  const post = elementWithClass('div', 'post-card');
  const button1 = elementWithClass('button', 'voteBtn');
  const button2 = elementWithClass('button', 'voteBtn');
  const head = elementWithClass('h5', 'voteBtn');
  const p = document.createElement('p');
  const up = '<span class="iconify" data-icon="bx:downvote"  data-rotate="180deg"></span>';
  const down = '<span class="iconify" data-icon="bx:downvote"></span>';
  button1.innerHTML = up;
  button2.innerHTML = down;
  button1.id = data.id;
  button2.id = data.id;
  button1.classList.add('cup');
  button2.classList.add('cdown');
  vote.appendChild(button1);
  vote.innerHTML += data.vote;
  vote.appendChild(button2);
  card.appendChild(vote);
  head.innerHTML = `Commented  by ${data.username} at ${data.date}`;
  p.innerText = data.content;
  post.appendChild(head);
  post.appendChild(p);
  card.appendChild(post);
  container.appendChild(card);
};

const getCookie = (cname) => {
  const name = `${cname}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};
const id = getCookie('id');
const loggedUser = getCookie('name');
const token = getCookie('token');
