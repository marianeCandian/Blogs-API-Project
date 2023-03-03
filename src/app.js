const express = require('express');
const validateLogin = require('./utils/validateLogin');
// const authToken = require('./utils/authToken');
const userController = require('./controllers/user.controller');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', validateLogin, userController.login);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
