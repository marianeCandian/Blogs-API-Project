const jwt = require('jsonwebtoken');
// const userService = require('../service/user.service');

const secret = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const { data } = jwt.verify(token, secret);

    req.user = data;
    return next();
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = auth;