import React, { useEffect, useState } from 'react'
import ListaCategoria from '../page/listaCategorias'
import api from '../service/api'
import './Components.css';
import {Link} from 'react-router'

function Categoria () {

    const [categoria, setCategoria] = useState([]);

    useEffect(() => {
        async function loadCategoria(){
          const response = await api.get('categorias');
          setCategoria(response.data);
        } 
        loadCategoria();
    }, [])

    return(
        <div className="text-center">
        <div className="headerPage">
                <h1 className="titlePage">Categorias</h1>
                <button className="btn btn-primary"><Link to={'/categorias/cadastro-categoria'}>Cadastrar Categoria</Link></button>
            </div>
            <hr></hr>
            <div className="row">
            {categoria.map(cat => (
                <>
                    <ListaCategoria key={cat._id} cat={cat}/>
                </>
            ))}
            </div>
        </div>
    );
}

export default Categoria
