import React from 'react'
import App from '../App';
import Home from './Home'
import ListaProdutos from './ListaProdutos'
import ListaCategorias from './ListaCategorias'
import Monitoramento from './Monitoramento'
import MinhaConta from './MinhaConta'
import Pedidos from './Pedidos'
import Sair from './Sair'
import CadProd from './CadastroProduto'
import EditaProd from './EditaProduto'
import CadCat from './CadastroCategoria'
import Produto from './Produto'
import Categoria from './Categoria'

import {Router, Route, IndexRoute, browserHistory } from 'react-router'

export default class Routes extends React.Component{
    
    render() {

        return(
            <Router history={browserHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home} />
                    <Route path='/dashboard' component={Home} />
                    <Route path='/produtos' component={ListaProdutos} />
                    <Route path='/produto/:id' component={Produto} />
                    <Route path='/produto/editar/:id' component={EditaProd} />
                    <Route path='/produtos/cadastro-produto' component={CadProd} />
                    <Route path='/categorias' component={ListaCategorias} />
                    <Route path='/categoria/:id' component={Categoria} />
                    <Route path='/categorias/cadastro-categoria' component={CadCat} />
                    <Route path='/Sair' component={Monitoramento} />
                    <Route path='/minha-conta' component={MinhaConta} />
                    <Route path='/pedidos' component={Pedidos} />
                    <Route path='/sair' component={Sair} />

                </Route>
            </Router>
        )
    }
}