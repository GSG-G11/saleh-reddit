/* eslint-disable camelcase */
const connection = require('../config/connection');

const insertPost = (data) => {
  const {
    title, content, community_name, user_id, content_type,
  } = data;
  return connection.query({
    text: 'INSERT INTO posts (title,content,community_name,user_id,content_type) VALUES ($1, $2, $3, $4, $5)  RETURNING *;',
    values: [title, content, community_name, user_id, content_type],
  });
};

const getUserPosts = (id) => connection.query({
  text: 'SELECT users.username,posts.id, posts.title,posts.vote, posts.content,posts.community_name,posts.content_type FROM users JOIN posts ON posts.user_id =users.id WHERE posts.user_id=$1;',
  values: [id],
});

const getPosts = () => connection.query({
  text: 'SELECT users.username, posts.id, posts.title,posts.vote ,posts.content,posts.community_name,posts.content_type,posts.post_date FROM users JOIN posts ON posts.user_id =users.id ORDER BY vote DESC;',
});

const getRecentPosts = () => connection.query({
  text: 'SELECT users.username, posts.id, posts.title, posts.content,posts.community_name,posts.content_type FROM users JOIN posts ON posts.user_id =users.id ORDER BY posts.post_date DESC;',
});

const increaseVote = (id) => connection.query({
  text: 'UPDATE posts SET vote = vote + 1 WHERE id = $1;',
  values: [id],
});

const decreaseVote = (id) => connection.query({
  text: 'UPDATE posts SET vote = vote - 1 WHERE id = $1;',
  values: [id],
});

const deletePost = (id) => connection.query({
  text: 'DELETE FROM posts WHERE id=$1;',
  values: [id],
});

module.exports = {
  insertPost,
  getUserPosts,
  getPosts,
  getRecentPosts,
  increaseVote,
  decreaseVote,
  deletePost,
};
