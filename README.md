# Projeto Blogs API

# Sobre
Este projeto foi desenvolvido durante o Módulo 3 - Back-End do curso de Desenvolvimento Web da Trybe.

Nele, foi construída uma API para a produção de conteúdo para um blog, utilizando o pacote sequelize. Ela permite fazer cadastro de usuários, login, publicar e exibir posts e suas categorias. Algumas dos endpoints requerem validação de dados para que a requisição tenha sucesso, incluindo a craição e validação de token com JSON Web Token.

Para fazer um post é necessário usuário e login, portanto foi trabalhada a relação entre user e post; e todo post deve possuir uma ou mais categorias, portanto também foi trabalhada a relação entre posts e categorias.

Os arquivos desenvolvidos por mim estão na pasta src. Os demais foram desenvolvidos pelo time da Trybe.

## Descrição dos endpoints:
<table>
  <thead>
    <tr>
      <th>Método HTTP</th>
      <th>Endpoint</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>POST</td>
      <td>/login</td>
      <td>Deve realizar o login do usuário, retornando um token</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/user</td>
      <td>Deve realizar o cadastro de um novo usuário, retornando um token</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/user</td>
      <td>Deve listar todos os usuários cadastrados</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/user/:id</td>
      <td>Deve listar o usuário referente à id requisitada</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/categories</td>
      <td>Deve listar todas as categorias de posts</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/categories</td>
      <td>Deve cadastrar uma nova categoria de post, e retornar um objeto com o nome e id da nova categoria</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/post</td>
      <td>Deve listar todos os posts</td>
    </tr>
  </tbody>
</table>

## Tecnologias usadas

> Back-End
Docker, docker-compose, SQL, Node.js, Sequelize, JSON Web Token

## Instalando Dependências

### Usando o Docker

1. Clone este repositório em su máquina, e em seguida suba o container:
```bash
docker-compose up -d --build
``` 
- Serão inicializados os containers blogs_api e blogs_api_db.

2. Dentro do diretório do projeto, execute o conteiner:
```bash
docker exec -it blogs_api bash
``` 
- As credencias de acesso ao banco de dados estão definidas no arquivo docker-compose.yml.

3. Agora instale as dependências dentro do container:
```bash
npm install
``` 
### Rodando localmente

 - É necessário ter o ```node``` (versão 16 ou superior) instalado em sua máquina.
 
 1. Clone este repositório em su máquina, e em seguida instale as dependências:
 ```bash
npm install
```
### Para inicializar o servidor
- Faça isso dentro do conatiner, se estiver o utilizando.
```bash
npm run debug
``` 
