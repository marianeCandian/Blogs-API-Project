const express = require('express');
const validateLogin = require('./utils/validateLogin');
const userController = require('./controllers/user.controller');
const { validateEmail, validatePassword, validateName } = require('./utils/validateUser');
const authToken = require('./utils/authToken');
const validadeNameFromCategories = require('./utils/validateNameFromCategories');
const categoryController = require('./controllers/category.controller');
 
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', validateLogin, userController.login);
app.post('/user', validateName, validatePassword, validateEmail, userController.create);
app.get('/user/:id', authToken, userController.getById);
app.get('/user', authToken, userController.getAllUsers);
app.post('/categories', authToken, validadeNameFromCategories, categoryController.createCategory);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
