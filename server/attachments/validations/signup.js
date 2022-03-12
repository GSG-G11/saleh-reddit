const Joi = require('joi');

const signUpValidation = Joi.object({
  username: Joi.string().alphanum().required(),
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().min(6).required(),
});
module.exports = { signUpValidation };