const { signUp } =require('../controllers/Auth')
const AuthRouter = require('express').Router();

AuthRouter.post('/signup' , signUp)


module.exports = { AuthRouter }