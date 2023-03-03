const userService = require('../service/user.service');

const validateName = (req, res, next) => {
  const { displayName } = req.body;
  
  if (!displayName || displayName.length < 8) {
    return res.status(400).json({ message: 
    '"displayName" length must be at least 8 characters long' });
  }

  return next();
};

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  const re = /\S+@\S+\.\S+/;

  if (!re.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  const dbEmail = await userService.getByEmail(email);

  if (dbEmail) {
    return res.status(409).json({ message: 'User already registered' });
  }
  return next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (!password || password.length < 6) {
    return res.status(400).json({ message:
    '"password" length must be at least 6 characters long' });
  }
  return next();
};

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
};