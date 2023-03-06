const { Category } = require('../models');

const createCategory = async (name) => {
  try {
    const newCategory = await Category.create({ name });
    console.log(newCategory);
    return newCategory;
  } catch (e) {
    return { type: 'error', message: e.message };
  }
};

const getAllCategories = async () => {
  try {
    const allUsers = await Category.findAll();
    return allUsers;
  } catch (error) {
    return { type: 'error', message: error.message };
  }
};

module.exports = { createCategory, getAllCategories };