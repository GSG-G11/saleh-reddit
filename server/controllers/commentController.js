const { commentValidation } = require('../attachments/validations');
const {
  insertComment,
  getPostComments,
  getUserComments,
  increaseVoteComment,
  decreaseVoteComment,
  deleteComment,
} = require('../database/queries');

const store = (req, res, next) => {
    console.log(req.body);
  commentValidation
    .validateAsync(req.body)
    .then((values) => insertComment(values))
    .then((result) => result.rows[0])
    .then((comment) => res.status(201).json({ msg: 'comment created', data: comment, status: 201 }))
    .catch(() => next());
};
const postComents = (req, res, next) => {
  const { id } = req.body;
  console.log(id);
  getPostComments(id)
    .then((result) => result.rows)
    .then((comments) => res.status(200).json({ msg: 'all post comments', data: comments, status: 200 }))
    .catch(() => next());
};
const userComents = (req, res, next) => {
  const { id } = req.body;
  getUserComments(id)
    .then((result) => result.rows)
    .then((comments) => res.status(200).json({ msg: 'all post comments', data: comments, status: 200 }))
    .catch(() => next());
};
const voteUp = (req, res, next) => {
  const { id } = req.body;
  increaseVoteComment(id)
    .then((result) => result.rows)
    .then((data) => res.status(200).json({ msg: ' vote up + 1 ', data, status: 200 }))
    .catch(() => next());
};
const voteDown = (req, res, next) => {
  const { id } = req.body;
  decreaseVoteComment(id)
    .then((result) => result.rows)
    .then((data) => res.status(200).json({ msg: ' vote down - 1 ', data, status: 200 }))
    .catch(() => next());
};
const deleteComent = (req, res, next) => {
  const { id } = req.body;
  deleteComment(id)
    .then((result) => result.rows)
    .then((data) => res.status(200).json({ msg: 'deleted', data, status: 200 }))
    .catch(() => next());
};

module.exports = {
  store,
  postComents,
  userComents,
  voteUp,
  voteDown,
  deleteComent,
};
