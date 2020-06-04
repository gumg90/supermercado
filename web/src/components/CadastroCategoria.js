import React, { useState } from 'react';
import api from '../service/api';
import CadCat from '../page/cadastroCategoria';

function CadCategoria() {
  const [categoria, setCategoria] = useState([]);


    async function handleAddCategoria(data){
        const response = await api.post('/categorias', data)
        setCategoria(response.data);
        
    }
  return (
    <>  
        <h1 className="bd-title">Cadastrar Categoria</h1>
            <CadCat onSubmit={handleAddCategoria}/>
    </>
  );
}

export default CadCategoria;
