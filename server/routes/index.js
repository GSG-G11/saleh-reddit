const AuthRouter = require('express').Router();
const { signUp, login } = require('../controllers/Auth');
const { storePost, userPosts, topVotePosts, recentPosts, voteUp, voteDown, postDelete } = require('../controllers/postController');

AuthRouter.post('/signup', signUp);
AuthRouter.post('/login', login);
AuthRouter.post('/post', storePost);
AuthRouter.post('/my-posts', userPosts);
AuthRouter.post('/voit-up', voteUp);
AuthRouter.post('/voit-down', voteDown);
AuthRouter.post('/delete-post', postDelete);
AuthRouter.get('/top-posts', topVotePosts);
AuthRouter.get('/recent-posts', recentPosts);

module.exports = { AuthRouter };
