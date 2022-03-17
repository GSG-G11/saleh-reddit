const commentsRouter = require('express').Router();
const {
  store,
  postComments,
  userComments,
  voteUp,
  voteDown,
  deleteCommentC,
} = require('../controllers/commentController');
const { routProtector } = require('../middlewares');

commentsRouter.post('/create',routProtector, store);
commentsRouter.post('/post', postComments);
commentsRouter.post('/user', routProtector, userComments);
commentsRouter.post('/up', routProtector, voteUp);
commentsRouter.post('/down', routProtector, voteDown);
commentsRouter.post('/delete', routProtector, deleteCommentC);

module.exports = { commentsRouter };
