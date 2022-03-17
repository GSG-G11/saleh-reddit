const commentsRouter = require('express').Router();
const {
  store,
  postComments,
  userComments,
  voteUp,
  voteDown,
  deleteCommentC,
} = require('../controllers/commentController');

commentsRouter.post('/create', store);
commentsRouter.post('/post', postComments);
commentsRouter.post('/user', userComments);
commentsRouter.post('/up', voteUp);
commentsRouter.post('/down', voteDown);
commentsRouter.post('/delete', deleteCommentC);

module.exports = { commentsRouter };
