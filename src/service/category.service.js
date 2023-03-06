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

module.exports = { createCategory };