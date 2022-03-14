const Joi = require('joi');

const commentValidation = Joi.object({
  content: Joi.string().required(),
  user_id: Joi.number().required(),
  post_id: Joi.number().required(),
});
module.exports = { commentValidation };
