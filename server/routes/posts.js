const postsRouter = require('express').Router();
const { routProtector } = require('../middlewares');

const {
  storePost,
  userPosts,
  topVotePosts,
  recentPosts,
  voteUp,
  voteDown,
  postDelete,
  userProfile,
} = require('../controllers/postController');

postsRouter.get('/user-posts/:id', userProfile);
postsRouter.get('/top-posts', topVotePosts);
postsRouter.get('/recent-posts', recentPosts);
postsRouter.post('/post', routProtector, storePost);
postsRouter.post('/my-posts', routProtector, userPosts);
postsRouter.post('/vote-up', routProtector, voteUp);
postsRouter.post('/vote-down', routProtector, voteDown);
postsRouter.post('/delete-post', routProtector, postDelete);

module.exports = { postsRouter };
