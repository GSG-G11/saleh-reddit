const path = require('path');

const notFoundError = (req, res, next) => {
  const file = path.join(__dirname, '..', '..', '..', 'public/html/404.html');
  res.status(404).sendFile(file);
};

module.exports = notFoundError;
