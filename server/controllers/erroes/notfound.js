const notFoundError = (req, res, next) => {
  res.status(404).json({ msg: 'Page Not Found', status: 404 });
};

module.exports = notFoundError;
