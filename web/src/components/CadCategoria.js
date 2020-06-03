import React, { useEffect, useState } from 'react';
import api from '../service/api';
import CadCat from '../page/cadCategoria';
import { FindReplace } from '@material-ui/icons';

function Cadcategoria() {
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

export default Cadcategoria;
