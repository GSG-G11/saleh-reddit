const app = require('./app');
const { notFoundError, serverError } = require('./controllers/errors');
const { AuthRouter, commentsRouter, postsRouter } = require('./routes');

const port = app.get('port');

app.use(AuthRouter);
app.use(postsRouter);
app.use('/comments', commentsRouter);
app.use(notFoundError);
app.use(serverError);

app.listen(port, () => {
  console.log(`App is live on http://localhost:${port}`);
});
