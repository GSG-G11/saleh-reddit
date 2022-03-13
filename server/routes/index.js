const { signUp,login } =require('../controllers/Auth')
const AuthRouter = require('express').Router();

AuthRouter.post('/signup' , signUp)
AuthRouter.post('/login' , login)


module.exports = { AuthRouter }