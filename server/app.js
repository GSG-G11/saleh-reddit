const cookieParser = require('cookie-parser');
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));
app.set('port', process.env.PORT || 5000);

app.get('hello', (req, res) => {
  res.send('hello world');
});

module.exports = app;
