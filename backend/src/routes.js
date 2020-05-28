const { Router } = require('express');
const ProdutoController = require('./controllers/ProdutoController')
const SearchController = require('./controllers/SearchController')
const CategoriaController = require('./controllers/CategoriaController')




const routes = Router();

routes.post('/produtos', ProdutoController.store);
routes.post('/categoria', CategoriaController.store);
routes.get('/produtos', ProdutoController.index);
routes.get('/produto/:id', ProdutoController.list);
routes.get('/categoria', CategoriaController.index);


module.exports=routes;