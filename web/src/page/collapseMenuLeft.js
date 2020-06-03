import Menu from './menu'
import React from 'react'
import {Dashboard, Storefront, Category, Airplay} from '@material-ui/icons/'

export default class collapseMenuLeft extends React.Component {
    Home = {
        icon: <Dashboard/>,  
        page:'dashboard',   
        title: 'Dashboard',
        action: () => alert('Produto Maça CLick')
    }
    Produtos = {
        icon: <Storefront />,
        page: 'produtos',   
        title: 'Produtos',
        action: () => alert('Produto Laranja CLick')
    }
    Categoria = {
        icon: <Category />,
        page:'categorias',   
        title: 'Categorias',
        action: () => alert('Produto Uva CLick')
    }
    Monitoramento ={
        icon: <Airplay />,
        page:'monitoramento',   
        title: 'Monitoramento',
        action: () => alert('Produto Uva CLick')

    }
    
    render(){
        return(
            <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-inverse p-4">
            <Menu {...this.Home}/>
            <Menu {...this.Produtos}/>
            <Menu {...this.Categoria}/>
            <Menu {...this.Monitoramento}/>
            </div>
        </div>
        )
    }
}