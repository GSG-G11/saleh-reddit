const commentsRouter = require('express').Router();
const {
  store,
  postComents,
  userComents,
  voteUp,
  voteDown,
  deleteComent,
} = require('../controllers/commentController');

commentsRouter.post('/create', store);
commentsRouter.post('/post', postComents);
commentsRouter.post('/user', userComents);
commentsRouter.post('/up', voteUp);
commentsRouter.post('/down', voteDown);
commentsRouter.post('/delete', deleteComent);

module.exports = { commentsRouter };
