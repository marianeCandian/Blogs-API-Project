const categoryService = require('../service/category.service');

const validatePosts = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  return next();
};

const validadeCategories = async (req, res, next) => {
  const { categoryIds } = req.body;

  const verifyCategories = await categoryService.findAllById(categoryIds);

  if (verifyCategories.length !== categoryIds.length) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  return next();
};

module.exports = { validatePosts, validadeCategories };