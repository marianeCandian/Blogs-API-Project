const categoryService = require('../service/category.service');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const newCategory = await categoryService.createCategory(name);

  if (newCategory.type) return res.status(400).json({ message: newCategory.message });

  res.status(201).json(newCategory);
};

module.exports = { createCategory };