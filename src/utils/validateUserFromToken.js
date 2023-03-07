const blogPostService = require('../service/blog.post');
const userService = require('../service/user.service');

const validateUser = async (req, res, next) => {
  const { id } = req.params;
  const { userId } = req.user;

  const post = await blogPostService.findById(id);

  if (!post) return res.status(404).json({ message: 'Post does not exist' });

  const userLogin = await userService.getById(userId);

  if (post.user.email !== userLogin.email) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }  
  
  return next();
};

module.exports = validateUser;