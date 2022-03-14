const app = require('./app');
const { AuthRouter } = require('./routes');
const { commentsRouter } = require('./routes/comments');

const port = app.get('port');

app.use(AuthRouter);
app.use('/comments', commentsRouter);

app.listen(port, () => {
  console.log(`App is live on http://localhost:${port}`);
});
