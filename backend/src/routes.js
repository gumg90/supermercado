const { Router } = require('express');
const ProdutoController = require('./controllers/ProdutoController')
const SearchController = require('./controllers/SearchController')
const CategoriaController = require('./controllers/CategoriaController')

const routes = Router();

routes.post('/produtos', ProdutoController.store);
routes.get('/produtos', ProdutoController.index);
routes.get('/produto/:id', ProdutoController.list);
routes.post('/categorias', CategoriaController.store);
routes.get('/categorias', CategoriaController.index);
routes.get('/categoria/:id', CategoriaController.list);

module.exports=routes;