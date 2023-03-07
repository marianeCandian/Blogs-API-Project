const blogPostService = require('../service/blog.post');

const validateUserDelete = async (req, res, next) => {
  const { id } = req.params;
  const { userId } = req.user;

  const post = await blogPostService.findById(id);

  if (!post) return res.status(404).json({ message: 'Post does not exist' });

  if (post.user.id !== userId) {
    res.status(401).json({ message: 'Unauthorized user' });
  }  
  
  return next();
};

module.exports = validateUserDelete;