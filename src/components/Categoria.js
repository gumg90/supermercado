import React, {Component} from 'react'
import Categorias from '../ui/categorias'
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
                    <Categorias {...this.fruta}/>
                    <Categorias {...this.verdura}/>
                    <Categorias {...this.mercearia}/>
                    <Categorias {...this.fruta}/>
                    <Categorias {...this.verdura}/>
                    <Categorias {...this.mercearia}/>
                </div>
            </div>
        );
    }
}

