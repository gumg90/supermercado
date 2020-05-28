import React from 'react'
import App from '../App';
import Home from './Home'
import ListaProdutos from './ListaProdutos'
import ListaCategorias from './ListaCategoria'
import Monitoramento from './Monitoramento'
import MinhaConta from './MinhaConta'
import Pedidos from './Pedidos'
import Sair from './Sair'
import CadProd from './CadProduto'
import Produto from './Produto'
import {Router, Route, IndexRoute, browserHistory } from 'react-router'

export default class Routes extends React.Component{
    
    render() {
        let _id=""
        return(
            <Router history={browserHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home} />
                    <Route path='/dashboard' component={Home} />
                    <Route path='/produtos' component={ListaProdutos} />
                    <Route path='/produto/:id' component={Produto} />
                    <Route path='/categoria' component={ListaCategorias} />
                    <Route path='/Sair' component={Monitoramento} />
                    <Route path='/minha-conta' component={MinhaConta} />
                    <Route path='/pedidos' component={Pedidos} />
                    <Route path='/sair' component={Sair} />
                    <Route path='/produtos/cadProduto' component={CadProd} />
                </Route>
            </Router>
        )
    }
}