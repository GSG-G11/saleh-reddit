const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('env2')('.env');

const {
  insertUser,
  getUserByEmail,
} = require('../../database/queries/usersCRUD');
const {
  signUpValidation,
  loginValidation,
} = require('../../attachments/validations');
const { myError } = require('../errors');

const signUp = (req, res, next) => {
  const { username, email, password } = req.body;
  const token = jwt.sign(username, process.env.SECRET_KEY);
  signUpValidation
    .validateAsync(req.body)
    .then((values) => getUserByEmail(values.email))
    .then((user) => {
      if (user.rowCount) {
        throw myError({ msg: 'email already exists', status: 400 });
      } else {
        return bcrypt.hash(password, 10);
      }
    })
    .then((hashedPW) => ({
      username,
      email,
      password: hashedPW,
    }))
    .then((data2insert) => insertUser(data2insert))
    .then((userData) => {
      res.cookie('token', token);
      res.cookie('id', userData.rows[0].id);
      res.cookie('name', userData.rows[0].username);
      res.status(201).json({ msg: 'user created successfully', status: 201 });
    })
    .catch((error) => {
      next(error);
    });
};

const login = (req, res, next) => {
  const { password } = req.body;
  loginValidation
    .validateAsync(req.body)
    .then((values) => getUserByEmail(values.email))
    .then((user) => {
      if (user.rowCount) {
        const { rows } = user;
        req.id = rows[0].id;
        req.name = rows[0].username;
        return bcrypt.compare(password, rows[0].password);
      }
      throw myError({ msg: 'Email not found', status: 400 });
    })
    .then((isMatch) => {
      const { id, name } = req;
      const token = jwt.sign(name, process.env.SECRET_KEY);
      if (!isMatch) {
        throw myError({ msg: 'incorrect password', status: 400 });
      } else {
        res.cookie('token', token);
        res.cookie('id', id);
        res.cookie('name', name);
        res.status(200).json({ msg: 'logged in successfully', status: 200 });
      }
    })
    .catch((error) => {
      next(error);
    });
};

const logout = (req, res, next) => {
  res.clearCookie('id');
  res.clearCookie('name');
  res.status(200).clearCookie('token').redirect('/');
};

module.exports = { signUp, login, logout };
