const serverError = (error, req, res, next) => {
  if (error.name === 'ValidationError') {
    res.status(400).json({ msg: error.message, status: error.status });
  } else if (error.status) {
    res.status(400).json({ msg: error.message, status: 400 });
  } else {
    res.status(500).json({ msg: 'server error', status: 500 });
  }
};
module.exports = serverError;
