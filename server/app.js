const cookieParser = require('cookie-parser');
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));
app.set('port', process.env.PORT || 5000);

app.get('/hellow' , (req, res)=>{
    res.send('hello world');
})

module.exports = app

