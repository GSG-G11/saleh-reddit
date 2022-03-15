const app = require('./app');
const { AuthRouter } = require('./routes');
const { commentsRouter } = require('./routes/comments');

const port = app.get('port');

app.use(AuthRouter);
app.use('/comments', commentsRouter);
app.use((req, res, next) => {
  res.status(404).json({ msg: 'page not found' });
});
app.use((error, req, res, next) => {
  if (error.name === 'ValidationError') {
    res.status(400).json({ msg: error.message, status: error.status });
  } else if (error.status) {
    res.status(400).json({ msg: error.message, status: 400 });
  } else {
    res.status(500).json({ msg: 'server error', status: 500 });
  }
});

app.listen(port, () => {
  console.log(`App is live on http://localhost:${port}`);
});
