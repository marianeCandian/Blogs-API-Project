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

const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await blogPostService.findById(id);

  if (!post) return res.status(404).json({ message: 'Post does not exist' });

  return res.status(200).json(post);
};

const updatePost = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;
  await blogPostService.updatePost({ title, content, id });

  const result = await blogPostService.findById(id);

  if (result.type) return res.status(500).json({ message: result.message });

  return res.status(200).json(result);
};

module.exports = { createBlogPost, findAll, deletePost, getPostById, updatePost };