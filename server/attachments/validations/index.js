const { signUpValidation } = require('./signup');
const { loginValidation } = require('./login');
const { addPostValidation } = require('./post');
const { commentValidation } = require('./comment');

module.exports = {
  signUpValidation, loginValidation, addPostValidation, commentValidation,
};
