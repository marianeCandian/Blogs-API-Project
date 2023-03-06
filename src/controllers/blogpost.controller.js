const blogPostService = require('../service/blog.post');

const createBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { userId } = req.user;

  const post = { title, content, categoryIds, userId };
  
  await blogPostService.createBlogPost(post);

  const newBlogPost = await blogPostService.findNewPost({ title, content, userId });

  if (newBlogPost.type) return res.status(500).json({ message: newBlogPost.message });

  return res.status(201).json(newBlogPost);
};

const findAll = async (_req, res) => {
  const posts = await blogPostService.findAll();

  if (posts.type) return res.status(500).json({ message: posts.message });

  return res.status(200).json(posts);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  await blogPostService.deletePost(id);
  res.status(204).end();
};

module.exports = { createBlogPost, findAll, deletePost };