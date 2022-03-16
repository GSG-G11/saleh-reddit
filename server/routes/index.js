const AuthRouter = require('express').Router();
const { signUp, login, logout } = require('../controllers/Auth');
const { storePost, userPosts, topVotePosts, recentPosts, voteUp, voteDown, postDelete, userProfile } = require('../controllers/postController');
const{ routProtector } =require('../middlewares')

AuthRouter.post('/signup', signUp);
AuthRouter.get('/logout', logout);
AuthRouter.post('/login', login);
AuthRouter.get('/user-posts/:id', userProfile);
AuthRouter.get('/top-posts', topVotePosts);
AuthRouter.get('/recent-posts', recentPosts);
AuthRouter.use(routProtector);
AuthRouter.post('/post',storePost);
AuthRouter.post('/my-posts', userPosts);
AuthRouter.post('/vote-up', voteUp);
AuthRouter.post('/vote-down', voteDown);
AuthRouter.post('/delete-post', postDelete);


module.exports = { AuthRouter };
