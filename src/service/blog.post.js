const { Op } = require('sequelize');
const { BlogPost, PostCategory, User, Category } = require('../models');

const createBlogPost = async (post) => {
  try {
    const { categoryIds } = post;
    const { dataValues } = await BlogPost.create(post);
    console.log(dataValues);
  await Promise
    .all(categoryIds.map((categoryId) => PostCategory
      .create({ categoryId, postId: dataValues.id })));
  } catch (e) {
    console.error(e);
    return { type: 'error', message: e.message };
  }
};

const findNewPost = async ({ title, content, userId }) => BlogPost
.findOne({ where: { title, content, userId } });

const findAll = async () => {
  try {
    const allPosts = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: 'password' } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return allPosts;
  } catch (e) {
    return { type: 'error', message: e.message };
  }
};

const findById = async (id) => {
  try {
    const post = await BlogPost.findByPk(id, {
      include: [
        { model: User, as: 'user', attributes: { exclude: 'password' } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    console.log(post);
    return post;
  } catch (e) {
    return { type: 'error', message: e.message };
  }
};

const deletePost = async (id) => {
  try {
    await BlogPost.destroy({ where: { id } });
  } catch (e) {
    return { type: 'error', message: e.message };
  }
};

const updatePost = async ({ title, content, id }) => {
  try {
    await BlogPost.update({ title, content }, { where: { id } });
  } catch (e) {
    return { type: 'error', message: e.message };
  }
};

const searchPost = async (q) => {
  try {
    const post = await BlogPost.findAll({
      where: {
        [Op.or]:
        [{ title: { [Op.like]: q } }, { content: { [Op.like]: q } }],
      },
      include: [
        { model: User, as: 'user', attributes: { exclude: 'password' } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return post;
  } catch (e) {
    return { type: 'error', message: e.message };
  }
};

module.exports = { createBlogPost,
  findNewPost,
  findAll,
  findById,
  deletePost,
  updatePost,
  searchPost,
};