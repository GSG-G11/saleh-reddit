/* eslint-disable camelcase */
const connection = require('../config/connection');

const insertComment = (data) => {
  const { content, post_id, user_id } = data;
  return connection.query({
    text: 'INSERT INTO comments ( content, post_id, user_id ) VALUES ($1, $2, $3)  RETURNING *;',
    values: [content, post_id, user_id],
  });
};

// take post id
const getPostComments = (id) => connection.query({
  text: 'SELECT users.username, comments.id, comments.content, comments.date,comments.vote FROM users JOIN comments ON comments.user_id =users.id JOIN posts ON comments.post_id = posts.id WHERE posts.id=$1 ORDER BY comments.date DESC;',
  values: [id],
});

// take user id
const getUserComments = (id) => connection.query({
  text: 'SELECT users.username, comments.id, comments.content,comments.date,comments.vote FROM users JOIN comments ON comments.user_id =users.id WHERE comments.user_id=$1;',
  values: [id],
});

const increaseVoteComment = (id) => connection.query({
  text: 'UPDATE comments SET vote = vote + 1 WHERE id = $1;',
  values: [id],
});

const decreaseVoteComment = (id) => connection.query({
  text: 'UPDATE comments SET vote = vote - 1 WHERE id = $1;',
  values: [id],
});

const deleteComment = (id) => connection.query({
  text: 'DELETE FROM comments WHERE id=$1;',
  values: [id],
});

module.exports = {
  insertComment,
  getPostComments,
  getUserComments,
  increaseVoteComment,
  decreaseVoteComment,
  deleteComment,
};
