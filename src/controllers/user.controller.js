const jwt = require('jsonwebtoken');
const userService = require('../service/user.service');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.login(email, password);

  if (!user) return res.status(400).json({ message: 'Invalid fields' });

  const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

  res.status(200).json({ token });
};

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const response = await userService.create({ displayName, email, password, image });

  if (response.type) return res.status(400).json({ message: response.message });

  const newUser = response.dataValues.id;

  const token = jwt.sign({ data: { userId: newUser } }, secret, jwtConfig);

  return res.status(201).json({ token });
};

module.exports = {
  login,
  create,
};