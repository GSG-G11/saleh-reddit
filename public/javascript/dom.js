const elementWithClass = (tagName, className) => {
  const div = document.createElement(tagName);
  div.classList.add(className);
  return div;
};

const renderCard = (container, data) => {
  const card = elementWithClass('div', 'card');
  const vote = elementWithClass('div', 'vote');
  const post = elementWithClass('div', 'post-card');
  const button1 = elementWithClass('button', 'voteBtn');
  const button2 = elementWithClass('button', 'voteBtn');
  const button3 = elementWithClass('button', 'comments');
  const head = elementWithClass('h5', 'voteBtn');
  const p = document.createElement('p');
  const up = '<span class="iconify" data-icon="bx:downvote"  data-rotate="180deg"></span>';
  const down = '<span class="iconify" data-icon="bx:downvote"></span>';
  button1.innerHTML = up;
  button2.innerHTML = down;
  button1.id = data.id;
  button2.id = data.id;
  button3.textContent = 'comments';
  button1.classList.add('up');
  button2.classList.add('down');
  vote.appendChild(button1);
  vote.innerHTML += data.vote;
  vote.appendChild(button2);
  card.appendChild(vote);
  head.textContent = `${data.community_name} posted by ${data.username} at ${data.post_date}`;
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
  card.appendChild(post);
  container.appendChild(card);
};
