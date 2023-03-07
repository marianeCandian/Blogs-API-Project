const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Token not found' });

    const { data } = jwt.verify(token, secret);

    req.user = data;
    return next();
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = auth;