const { AuthRouter } = require('./auth');
const { commentsRouter } = require('./comments');
const { postsRouter } = require('./posts');

module.exports = { AuthRouter, commentsRouter, postsRouter };
