const jwt = require('jsonwebtoken');
const { myError } = require('../controllers/erroes');

const routProtector = (req, res, next) => {
  jwt.verify(req.cookies.token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      throw myError({ msg: 'not reauthorized users', status: 401 });
    } else {
      next();
    }
  }).catch((err) => res.status(err.status).json(err));
};
module.exports = routProtector;
