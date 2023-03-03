const { User } = require('../models');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  return user;
};

const getByEmail = async (email) => {
  const dbemail = await User.findOne({ where: { email } });
  
  return dbemail;
};

const create = async ({ displayName, email, password, image }) => {
  try {
    const newUser = await User.create({ displayName, email, password, image });
    return newUser;
  } catch (e) {
    return { type: 'error', message: e.message };
  }
};

const getAllUsers = async () => {
  try {
    const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });
    return allUsers;
  } catch (error) {
    return { type: 'error', message: error.message };
  }
};

const getById = async (id) => {
  try {
    const allUsers = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
    return allUsers;
  } catch (error) {
    return { type: 'error', message: error.message };
  }
};

module.exports = {
  login,
  getById,
  create,
  getByEmail,
  getAllUsers,
};