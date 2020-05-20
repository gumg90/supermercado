const { Router } = require('express');
const ProdutoController = require('./controllers/ProdutoController')
const SearchController = require('./controllers/SearchController')



const routes = Router();

routes.post('/produto', ProdutoController.store);
routes.get('/produto', ProdutoController.index);
routes.put('/produto/:id', ProdutoController.update);
routes.get('/search', SearchController.index);
routes.delete('/produto/:id', ProdutoController.destroy);


module.exports=routes;