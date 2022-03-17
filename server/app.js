const cookieParser = require('cookie-parser');
const express = require('express');
require('env2')('.env');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));
app.set('port', process.env.PORT);

app.get('hello', (req, res) => {
  res.send('hello world');
});

module.exports = app;
