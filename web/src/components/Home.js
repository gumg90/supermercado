import React, {Component} from 'react'
import HomePage from '../page/home'
import './Components.css';
import {ShoppingCart, ShoppingBasket, MoveToInbox} from '@material-ui/icons';


export default class Home extends Component{
    render(){
        return(
            <div className="row">
                <HomePage icon={<ShoppingCart style={{fontSize: "5rem"}}/>} title="Vendas" class="card-success"/>
                <HomePage icon={<ShoppingBasket style={{fontSize: "5rem"}}/>} title="Compras" class="card-primary"/>
                <HomePage icon={<MoveToInbox style={{fontSize: "5rem"}}/>} title="Estoque" class="card-danger"/>
            </div>
        )
    }
}