const Joi = require('joi');

const addPostValidation = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  community_name: Joi.string().required(),
  vote: Joi.number(),
  user_id: Joi.number().required(),
  content_type: Joi.string().required(),
});
module.exports = { addPostValidation };
