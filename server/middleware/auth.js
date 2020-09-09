const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function(req, res, next) {
  const token = req.header('x-auth-token');

  if (!token) return res.status(401).json({ msg: 'No token, unauthorized.' });

  try {
    req.user = jwt.verify(token, process.env.jwtSecret);
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Invalid token.' });
  }
};
