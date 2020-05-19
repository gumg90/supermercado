import React, {Component} from 'react'
import ListaCategorias from '../ui/listaCategorias'
import './Components.css';



export default class Categoria extends Component {

    verdura = {
        title: "Alface",
        text: "Isto é uma Alface",
        value: "R$10,00",
        action: () => alert('Produto Alface CLick')
    }
    fruta = {
        title: "Laranja",
        text: "Isto é uma Laranja",
        value: "R$10,00",
        action: () => alert('Produto Laranja CLick')
    }
    mercearia = {
        title: "Jarra",
        text: "Isto é uma Jarra",
        value: "R$10,00",
        action: () => alert('Produto Jarra CLick')
    }
    render(){
        return(
            <div className="text-center">
                <div className="row">
                    <ListaCategorias {...this.fruta}/>
                    <ListaCategorias {...this.verdura}/>
                    <ListaCategorias {...this.mercearia}/>
                    <ListaCategorias {...this.fruta}/>
                    <ListaCategorias {...this.verdura}/>
                    <ListaCategorias {...this.mercearia}/>
                </div>
            </div>
        );
    }
}

