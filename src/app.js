const express = require('express');
const validateLogin = require('./utils/validateLogin');
const userController = require('./controllers/user.controller');
const { validateEmail, validatePassword, validateName } = require('./utils/validateUser');
const authToken = require('./utils/authToken');
const validadeNameFromCategories = require('./utils/validateNameFromCategories');
const categoryController = require('./controllers/category.controller');
const { validatePosts, validadeCategories } = require('./utils/validatePosts');
const blogPostController = require('./controllers/blogpost.controller');
const validateUser = require('./utils/validateUserFromToken');
const validateFieldsPost = require('./utils/validateFieldsPost');
 
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/post', authToken, validatePosts, validadeCategories, blogPostController.createBlogPost);
app.get('/post', authToken, blogPostController.findAll);
app.get('/post/search', authToken, blogPostController.searchPost);
app.get('/post/:id', authToken, blogPostController.getPostById);
app.put('/post/:id', authToken, validateUser, validateFieldsPost, blogPostController.updatePost);
app.delete('/post/:id', authToken, validateUser, blogPostController.deletePost);
app.post('/login', validateLogin, userController.login);
app.post('/user', validateName, validatePassword, validateEmail, userController.create);
app.get('/user', authToken, userController.getAllUsers);
app.get('/user/:id', authToken, userController.getById);
app.delete('/user/me', authToken, userController.deleteUser);
app.post('/categories', authToken, validadeNameFromCategories, categoryController.createCategory);
app.get('/categories', authToken, categoryController.getAllCategories);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
