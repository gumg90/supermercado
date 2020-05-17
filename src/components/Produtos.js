import React, {Component} from 'react'
import Produtos from '../ui/produtos'
import './Components.css';



export default class Produto extends Component {

    produtoMaca = {
        title: "Maça",
        text: "Isto é uma maça",
        value: "R$10,00",
        action: () => alert('Produto Maça CLick')
    }
    produtoLaranja = {
        title: "Laranja",
        text: "Isto é uma Laranja",
        value: "R$10,00",
        action: () => alert('Produto Laranja CLick')
    }
    produtoUva = {
        title: "Uva",
        text: "Isto é uma Uva",
        value: "R$10,00",
        action: () => alert('Produto Uva CLick')
    }
    render(){
        return(
            <div className="text-center">
                <div className="row">
                    <Produtos {...this.produtoMaca}/>
                    <Produtos {...this.produtoLaranja}/>
                    <Produtos {...this.produtoUva}/>
                    <Produtos {...this.produtoMaca}/>
                    <Produtos {...this.produtoLaranja}/>
                    <Produtos {...this.produtoUva}/>
                </div>
            </div>
        );
    }
}

