const { Router } = require('express');
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;


// "Metodos HTTP" - GET, POST, PUT, DELETE
// MongoDB (Não-relacional)

// Tipos de Parâmetros em Express:
// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar parametros na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)