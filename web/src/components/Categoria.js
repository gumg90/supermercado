import React, { useEffect, useState } from 'react'
import api from '../service/api'
import Categorias from '../page/categoria'
import {Link} from 'react-router'
const getId = require('../utils/getId')
  




function Categoria ({props}) {
    const [categoria, setCategoria] = useState([]);
    
    let url  = getId();
    console.log(url)

    useEffect(() => {
        async function loadCategoria(){
          const response = await api.get('/categoria/'+url);
          setCategoria(response.data)
          console.log(response.data)
        } 
        loadCategoria();
    }, [])
    return(
        
        <div className="text-center">
            <div className="headerPage">
                <h1 className="titlePage">Categoria</h1>
                <button className="btn btn-primary"><Link to={'/categorias/cadastro-categoria'}>Cadastrar Categoria</Link></button>
            </div>
            <hr></hr>
            <div className="row">
                {categoria.map(cat => (
                    <>
                        <Categorias key={cat._id} cat={cat} />
                    </>
                ))}

            </div>
        </div>
    );
}

export default Categoria
