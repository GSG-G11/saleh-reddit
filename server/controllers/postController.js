const { addPostValidation } = require('../attachments/validations');
const {
  insertPost,
  getUserPosts,
  getPosts,
  getRecentPosts,
  increaseVote,
  decreaseVote,
  deletePost,
} = require('../database/queries');

const storePost = (req, res, next) => {
  addPostValidation
    .validateAsync(req.body)
    .then(() => insertPost(req.body))
    .then(() => res.status(201).json({ msg: 'post created', status: 201 }))
    .catch((error) => {
      if (error.name === 'ValidationError') {
        res.status(400).json({ msg: error.message, status: 400 });
      } else {
        next();
      }
    });
};

const userPosts = (req, res, next) => {
  const { id } = req.body;
  getUserPosts(id)
    .then((result) => result.rows)
    .then((data) => res.status(200).json({ msg: 'all user\'s posts', data, status: 200 }))
    .catch(() => next());
};

const topVotePosts = (req, res, next) => {
  getPosts()
    .then((result) => result.rows)
    .then((data) => res.status(200).json({ msg: 'top posts vote', data, status: 200 }))
    .catch(() => next());
};

const recentPosts = (req, res, next) => {
  getRecentPosts()
    .then((result) => result.rows)
    .then((data) => res.status(200).json({ msg: 'top posts vote', data, status: 200 }))
    .catch(() => next());
};

const voteUp = (req, res, next) => {
  const { id } = req.body;
  increaseVote(id)
    .then((result) => result.rows)
    .then((data) => res.status(200).json({ msg: ' vote up + 1 ', data, status: 200 }))
    .catch(() => next());
};

const voteDown = (req, res, next) => {
  const { id } = req.body;
  decreaseVote(id)
    .then((result) => result.rows)
    .then((data) => res.status(200).json({ msg: ' vote down - 1 ', data, status: 200 }))
    .catch(() => next());
};
const postDelete = (req, res, next) => {
  const { id } = req.body;
  deletePost(id)
    .then((result) => result.rows)
    .then((data) => res.status(200).json({ msg: 'deleted', data, status: 200 }))
    .catch(() => next());
};


module.exports = {
  storePost, userPosts, topVotePosts, recentPosts, voteUp, voteDown, postDelete
};
