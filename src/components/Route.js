import React from 'react'
import App from '../App';
import Home from './Home'
import Produtos from './Produtos'
import Categoria from './Categoria'
import Monitoramento from './Monitoramento'
import MinhaConta from './MinhaConta'
import Pedidos from './Pedidos'
import Sair from './Sair'


import {Router, Route, IndexRoute, hashHistory} from 'react-router'

export default class Routes extends React.Component{
    render() {
        return(
            <Router history={hashHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home} />
                    <Route path='/dashboard' component={Home} />
                    <Route path='/produtos' component={Produtos} />
                    <Route path='/categoria' component={Categoria} />
                    <Route path='/Sair' component={Monitoramento} />
                    <Route path='/minha-conta' component={MinhaConta} />
                    <Route path='/pedidos' component={Pedidos} />
                    <Route path='/sair' component={Sair} />
                </Route>
            </Router>
        )
    }
}