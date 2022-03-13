const { signUp,login } =require('../controllers/Auth');
const storePost = require('../controllers/postController');

const AuthRouter = require('express').Router();

AuthRouter.post('/signup' , signUp)
AuthRouter.post('/login' , login)
AuthRouter.post('/post' , storePost)


module.exports = { AuthRouter }