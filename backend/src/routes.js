const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.post('/devs', async (request, response) => {
  const { github_username } = request.body;
  const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
  const { name = login, avatar_url, bio } = apiResponse.data;

  console.log(name, avatar_url, bio, github_username);

  return(response.json({ message: 'Sandro Torres' }))
})

module.exports = routes;


// "Metodos HTTP" - GET, POST, PUT, DELETE
// MongoDB (Não-relacional)

// Tipos de Parâmetros em Express:
// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar parametros na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)