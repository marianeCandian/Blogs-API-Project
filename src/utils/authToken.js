const jwt = require('jsonwebtoken');
const userService = require('../service/user.service');

const secret = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const { data: { userId } } = jwt.verify(token, secret);
    const user = await userService.getById(userId);

    if (!user) return res.status(400).json({ message: 'Invalid fields' });

    req.user = user;
    return next();
  } catch (e) {
    return res.status(401).json({ message: e.message });
  }
};

module.exports = auth;