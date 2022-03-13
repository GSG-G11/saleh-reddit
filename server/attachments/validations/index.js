const { signUpValidation } = require('./signup');
const { loginValidation } = require('./login');
const { addPostValidation } = require('./post');

module.exports = { signUpValidation, loginValidation, addPostValidation };
