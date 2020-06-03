import React, { useEffect, useState } from 'react'
import ListaCategoria from '../page/listaCategorias'
import api from '../service/api'
import './Components.css';



function Categoria () {

    const [categoria, setCategoria] = useState([]);

    useEffect(() => {
        async function loadCategoria(){
          const response = await api.get('categoria');
          setCategoria(response.data);
        } 
        loadCategoria();
    }, [])

    return(
        <div className="text-center">
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
