const {
  insertPost,
  getUserPosts,
  getPosts,
  getRecentPosts,
  increaseVote,
  decreaseVote,
  deletePost,
} = require('./post');

const {
  insertComment,
  getPostComments,
  getUserComments,
  increaseVoteComment,
  decreaseVoteComment,
  deleteComment,
} = require('./comment');

module.exports = {
  insertPost,
  getUserPosts,
  getPosts,
  getRecentPosts,
  increaseVote,
  decreaseVote,
  deletePost,
  insertComment,
  getPostComments,
  getUserComments,
  increaseVoteComment,
  decreaseVoteComment,
  deleteComment,
};
