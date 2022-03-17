const AuthRouter = require('express').Router();
const { signUp, login, logout } = require('../controllers/Auth');

AuthRouter.post('/signup', signUp);
AuthRouter.post('/login', login);
AuthRouter.get('/logout', logout);

module.exports = { AuthRouter };
