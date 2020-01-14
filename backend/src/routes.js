const { Router } = require('express');

const routes = Router();


// "Metodos HTTP" - GET, POST, PUT, DELETE
// MongoDB (Não-relacional)

// Tipos de Parâmetros em Express:
// Query Params: request.query (Filtros, ordenação, paginação, ...)
routes.get('/', (request, response) => {
  console.log(request.query)
  return response.json({ menssage: 'Filtros, Ordenação, Paginação, ...' })
})

// Route Params: request.params (Identificar parametros na alteração ou remoção)
routes.delete('/users/:id', (request, response) => {
  console.log(request.params);
  return response.json({ message: 'Identificar parametros na alteração ou remoção' });
});

// Body: request.body (Dados para criação ou alteração de um registro)
routes.post('/users/', (request, response) => {
  console.log(request.body)
  return(response.json({ message: 'Criação ou alteração de um registro' }))
})

module.exports = routes;