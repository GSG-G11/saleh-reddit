const connection = require('../config/connection');

const insertUser = (data) => {
  const { username, email, password } = data;
  return connection.query({
    text: 'INSERT INTO users (username,email, password) VALUES ($1, $2, $3) RETURNING *; ',
    values: [username, email, password],
  });
};

const getUserByEmail = (email) => connection.query({
  text: 'SELECT * FROM users WHERE email=$1;',
  values: [email],
});

const getUserById = (email) => connection.query({
  text: 'SELECT id, image, username, email FROM users WHERE email=$1;',
  values: [email],
});

const addImageToUser = (id, image) => connection.query({
  text: 'UPDATE users SET image=$1 WHERE id=$2;',
  values: [id, image],
});

module.exports = { insertUser, getUserByEmail };
